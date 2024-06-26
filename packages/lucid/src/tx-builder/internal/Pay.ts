import { Effect, Scope } from "effect";
import { assetsToValue, toScriptRef } from "@lucid-evolution/utils";
import { Address, Assets, Script } from "@lucid-evolution/core-types";
import { OutputDatum, TxBuilderConfig } from "../types.js";
import { CML } from "../../core.js";
import { toCMLAddress, toDatumOption } from "./TxUtils.js";
import { TxBuilderError, TxBuilderErrorCause } from "../../Errors.js";

export const payError = (cause: TxBuilderErrorCause, message?: string) =>
  new TxBuilderError({ cause, module: "Pay", message });

/** Pay to a public key or native script address. */
export const payToAddress = (
  config: TxBuilderConfig,
  address: Address,
  assets: Assets,
) =>
  Effect.gen(function* () {
    const output = CML.TransactionOutput.new(
      yield* toCMLAddress(address, config.lucidConfig),
      assetsToValue(assets),
    );
    config.txBuilder.add_output(CML.SingleOutputBuilderResult.new(output));
  });

/** Pay to a public key or native script address with datum or scriptRef. */
export const payToAddressWithData = (
  config: TxBuilderConfig,
  address: Address,
  outputDatum: OutputDatum,
  assets: Assets,
  scriptRef?: Script,
) =>
  Effect.gen(function* () {
    //TODO: Test with datumhash
    const outputBuilder = CML.TransactionOutputBuilder.new()
      .with_address(CML.Address.from_bech32(address))
      .with_data(toDatumOption(outputDatum));
    config.txBuilder.add_output(
      scriptRef
        ? outputBuilder
            .with_reference_script(toScriptRef(scriptRef))
            .next()
            .with_value(assetsToValue(assets))
            .build()
        : outputBuilder.next().with_value(assetsToValue(assets)).build(),
    );
  });

/** Pay to a plutus script address with datum or scriptRef. */
export const payToContract = (
  config: TxBuilderConfig,
  address: Address,
  outputDatum: OutputDatum,
  assets: Assets,
  scriptRef?: Script,
) =>
  Effect.gen(function* () {
    if (!outputDatum.value)
      yield* payError(
        "Datum",
        "No datum set. Script output becomes unspendable without datum.",
      );
    return yield* payToAddressWithData(
      config,
      address,
      outputDatum,
      assets,
      scriptRef,
    );
  });
