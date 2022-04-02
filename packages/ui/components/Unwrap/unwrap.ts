import Unwrap from "unwrap-react";

export type IntrinsicComprehensiveConditionalReturned = ReturnType<
  typeof Unwrap.IntrinsicComprehensiveConditional
>;

export type PickUnwrapTargets<
  T extends IntrinsicComprehensiveConditionalReturned
> = {
  [P in keyof T]?: T[P] extends keyof Record<keyof T, infer U>
    ? Required<Record<keyof U, U>>
    : Required<Record<keyof T, T>>;
};

export const GlobalJSXProps = <
  T extends IntrinsicComprehensiveConditionalReturned
>({
  ...props
}: PickUnwrapTargets<T[keyof T]>) => ({
  ...props
});

export default GlobalJSXProps({ ...GlobalJSXProps });
