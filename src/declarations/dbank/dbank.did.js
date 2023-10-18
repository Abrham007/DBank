export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Int], ['query']),
    'topUp' : IDL.Func([IDL.Nat], [], ['oneway']),
    'wihtDraw' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
