import React from "react";
import * as Styles from "./styles";

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Styles.FooterContainer className={`container`}>
      <div className={`content`}>{children}</div>
    </Styles.FooterContainer>
  );
};

export { Footer };
