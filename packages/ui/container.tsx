import cn from "classnames";
import {
  ComponentType,
  HTMLAttributes,
  DetailedHTMLFactory,
  FC,
  Component,
  ReactNode,
  AllHTMLAttributes
} from "react";
import Unwrap from "unwrap-react";
import { PickElementSelection } from "unwrap-react/unwrap";
import { TSXGlobalHelper } from "./unwrap";
export type Enumerable<T> = T | Array<T>;

export interface ContainerProps {
  className?: PickElementSelection<"div">["className"];
  children?: Enumerable<ReactNode>;
  el?: ComponentType<AllHTMLAttributes<HTMLDivElement>>;
  clean?: boolean;
  props?: PickElementSelection<"div">;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el,
  clean,
  props
}) => {
  const rootClassName = cn(props?.className, {
    "mx-auto max-w-10xl": !clean
  });

  const Component: typeof el = el as ComponentType<
    AllHTMLAttributes<HTMLDivElement>
  >;

  return (
    <Component ref={props?.ref} className={rootClassName} {...props}>
      {props?.children ?? children}
    </Component>
  );
};

export default Container;
