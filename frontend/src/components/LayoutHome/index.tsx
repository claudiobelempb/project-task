import React from "react";
import * as Styles from "./styles";

type LayoutHomeProps = {
  children: React.ReactNode;
};

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return <Styles.HeaderContainer>{children}</Styles.HeaderContainer>;
};

export { LayoutHome };
