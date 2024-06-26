import { Effect } from "effect";
import { CML, makeReturn } from "../../core.js";
import { Wallet } from "@lucid-evolution/core-types";
import { UnknownException } from "effect/Cause";
import { Either } from "effect/Either";

export type TxSigned = {
  submit: () => {
    safeRun: () => Promise<Either<string, UnknownException>>;
    unsafeRun: () => Promise<string>;
    program: () => Effect.Effect<string, UnknownException, never>;
  };
  toCBOR: () => string;
  toHash: () => string;
};
export const completeTxSign = (
  wallet: Wallet,
  txSigned: CML.Transaction,
): TxSigned => {
  return {
    //FIX: this can fail
    submit: () =>
      makeReturn(
        Effect.gen(function* () {
          return yield* Effect.tryPromise(() =>
            wallet.submitTx(txSigned.to_cbor_hex()),
          );
        }),
      ),
    toCBOR: () => {
      return txSigned.to_cbor_hex();
    },
    toHash: () => {
      return CML.hash_transaction(txSigned.body()).to_hex();
    },
  };
};
