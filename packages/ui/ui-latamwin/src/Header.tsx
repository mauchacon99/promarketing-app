import * as React from "react";

export interface HeaderProps {
  /** ClassName. */
  className: string;
}

/**
 * Header.
 *
 * @param props - HeaderProps.
 * @returns JSX.Element.
 */
export const Header = (props: HeaderProps) => {
  const { className } = props;
  return <h1 className={className}>Web </h1>;
};
