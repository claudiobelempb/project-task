import React from "react";
import * as Styles from "./styles";

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Styles.MainContainer className={`container`}>
      <div className={`content`}>{children}</div>
    </Styles.MainContainer>
  );
};

export { Main };
