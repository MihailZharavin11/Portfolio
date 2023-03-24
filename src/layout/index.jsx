import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = ({ workRef, contactRef }) => {
  return (
    <>
      <Header workRef={workRef} contactRef={contactRef} />
      <Outlet />
    </>
  );
};
