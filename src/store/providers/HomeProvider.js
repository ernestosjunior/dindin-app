import React from "react";
import { HomeContext } from "../contexts";

function HomeProvider({ children }) {
  const value = {};

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export default HomeProvider;
