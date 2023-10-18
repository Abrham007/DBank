import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<bigint>,
  'topUp' : (arg_0: bigint) => Promise<undefined>,
  'wihtDraw' : (arg_0: bigint) => Promise<undefined>,
}