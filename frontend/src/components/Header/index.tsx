import React from "react";
import * as Styles from "./styles";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Styles.HeaderContainer className={`container`}>
      <div className={`content`}>{children}</div>
    </Styles.HeaderContainer>
  );
};

export { Header };
