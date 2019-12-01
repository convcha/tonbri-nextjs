import React from "react";
import { AppBar } from "./AppBar";

export const Layout: React.FC<any> = props => {
  const { children } = props;

  return (
    <>
      <AppBar />
      {children}
    </>
  );
};
