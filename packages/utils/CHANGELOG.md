# @lucid-evolution/utils

## 0.1.9

### Patch Changes

- [#91](https://github.com/Anastasia-Labs/lucid-evolution/pull/91) [`05a492f`](https://github.com/Anastasia-Labs/lucid-evolution/commit/05a492ff90199758088bcc6536cc62f5f85040a8) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - add browser support

- Updated dependencies [[`05a492f`](https://github.com/Anastasia-Labs/lucid-evolution/commit/05a492ff90199758088bcc6536cc62f5f85040a8)]:
  - @lucid-evolution/core-types@0.1.6
  - @lucid-evolution/core-utils@0.1.6
  - @lucid-evolution/plutus@0.1.9
  - @lucid-evolution/bip39@0.2.7
  - @lucid-evolution/crc8@0.1.6

## 0.1.8

### Patch Changes

- [#86](https://github.com/Anastasia-Labs/lucid-evolution/pull/86) [`6eacab5`](https://github.com/Anastasia-Labs/lucid-evolution/commit/6eacab5c108485877879a2deffd2f8a1369ac172) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - - fix: use TransactionOutputBuilder.() instead of TransactionOutput.new()

  - test: enable all preprod tests
  - test: update test
  - refactor: code structure
  - test: add hello contract test using retry implementation

- [#86](https://github.com/Anastasia-Labs/lucid-evolution/pull/86) [`a8abb5d`](https://github.com/Anastasia-Labs/lucid-evolution/commit/a8abb5df4b6d233e314a36f0948c95ab15f784bb) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - refactor code

## 0.1.7

### Patch Changes

- [#84](https://github.com/Anastasia-Labs/lucid-evolution/pull/84) [`2fb5635`](https://github.com/Anastasia-Labs/lucid-evolution/commit/2fb56356fbdfc41c5dc7328456559c8aaf8dbf15) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - - refactor: fetch wallet utxos only once
  - refactor: change code structure
  - refactor: move CML to core file
  - refactor: set core file for CML lib
  - build(upgrade): bump packages version
- Updated dependencies [[`2fb5635`](https://github.com/Anastasia-Labs/lucid-evolution/commit/2fb56356fbdfc41c5dc7328456559c8aaf8dbf15)]:
  - @lucid-evolution/core-types@0.1.5
  - @lucid-evolution/core-utils@0.1.5
  - @lucid-evolution/plutus@0.1.8
  - @lucid-evolution/bip39@0.2.6
  - @lucid-evolution/crc8@0.1.5

## 0.1.6

### Patch Changes

- [#76](https://github.com/Anastasia-Labs/lucid-evolution/pull/76) [`ed27a6f`](https://github.com/Anastasia-Labs/lucid-evolution/commit/ed27a6fe707767dfc9332e242a8af939fc286db2) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - bump versions

## 0.1.5

### Patch Changes

- [#72](https://github.com/Anastasia-Labs/lucid-evolution/pull/72) [`459df3e`](https://github.com/Anastasia-Labs/lucid-evolution/commit/459df3e95fd55ccdf48fc9cd63e850c053d2f470) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - bump all packages

- Updated dependencies [[`459df3e`](https://github.com/Anastasia-Labs/lucid-evolution/commit/459df3e95fd55ccdf48fc9cd63e850c053d2f470)]:
  - @lucid-evolution/bip39@0.2.5
  - @lucid-evolution/core-types@0.1.4
  - @lucid-evolution/core-utils@0.1.4
  - @lucid-evolution/crc8@0.1.4
  - @lucid-evolution/plutus@0.1.7

## 0.1.4

### Patch Changes

- [#51](https://github.com/Anastasia-Labs/lucid-evolution/pull/51) [`bcda3fc`](https://github.com/Anastasia-Labs/lucid-evolution/commit/bcda3fc3ca9dc13e93ef95929af2fe6fd0937e60) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - Introduced a new function, applyDoubleCborEncoding, which offers double bytestring encoding capability to scripts.
  Notably, this function was previously dependent on `lucid-cardano`, but now our package is completely detached from it.
- Updated dependencies [[`70a5b80`](https://github.com/Anastasia-Labs/lucid-evolution/commit/70a5b809903f1e0dbef96ff6e5d32d8507ed442d), [`8522fa7`](https://github.com/Anastasia-Labs/lucid-evolution/commit/8522fa7a09cdec0cdd240fd76230b3dd0ce1b2a6)]:
  - @lucid-evolution/bip39@0.2.4

## 0.1.3

### Patch Changes

- [#49](https://github.com/Anastasia-Labs/lucid-evolution/pull/49) [`484a3c6`](https://github.com/Anastasia-Labs/lucid-evolution/commit/484a3c6bf273cedc0aa914eccebb4d78d633bdf4) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - - bump CMl version 5.2
  - remove toCMLTransactionHash , use CML.hash_transaction which is the fixed function from CML 5.2
- Updated dependencies [[`484a3c6`](https://github.com/Anastasia-Labs/lucid-evolution/commit/484a3c6bf273cedc0aa914eccebb4d78d633bdf4)]:
  - @lucid-evolution/core-types@0.1.3
  - @lucid-evolution/core-utils@0.1.3
  - @lucid-evolution/plutus@0.1.6
  - @lucid-evolution/bip39@0.2.3
  - @lucid-evolution/crc8@0.1.3

## 0.1.2

### Patch Changes

- [#47](https://github.com/Anastasia-Labs/lucid-evolution/pull/47) [`67b178b`](https://github.com/Anastasia-Labs/lucid-evolution/commit/67b178be520f53fe6901cac2c8573170408f861a) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - move key packages to dependencies

- Updated dependencies [[`67b178b`](https://github.com/Anastasia-Labs/lucid-evolution/commit/67b178be520f53fe6901cac2c8573170408f861a)]:
  - @lucid-evolution/core-types@0.1.2
  - @lucid-evolution/core-utils@0.1.2
  - @lucid-evolution/plutus@0.1.5
  - @lucid-evolution/bip39@0.2.2
  - @lucid-evolution/crc8@0.1.2

## 0.1.1

### Patch Changes

- [#45](https://github.com/Anastasia-Labs/lucid-evolution/pull/45) [`0f2e140`](https://github.com/Anastasia-Labs/lucid-evolution/commit/0f2e1404e4a476b5003f2937c01943ffd536fbd4) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - add dual export

## 0.1.0

### Minor Changes

- [#36](https://github.com/Anastasia-Labs/lucid-evolution/pull/36) [`fea08c4`](https://github.com/Anastasia-Labs/lucid-evolution/commit/fea08c44cdc52e58ed7a20ab4dc2566e708e8a21) Thanks [@solidsnakedev](https://github.com/solidsnakedev)! - fix building

## 0.1.0-alpha.0

### Minor Changes

- add toCMLTransactionHash function
