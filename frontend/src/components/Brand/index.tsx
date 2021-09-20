import React from "react";
import * as Styles from "./styles";

type BrandProps = {
  children: React.ReactNode;
};

const Brand: React.FC = () => {
  return (
    <div className={`container`}>
      <div className={`content`}>
        <Styles.BrandContainer>Brand</Styles.BrandContainer>
      </div>
    </div>
  );
};

export { Brand };
