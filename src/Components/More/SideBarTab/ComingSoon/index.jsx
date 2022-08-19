import { Typography } from "@material-ui/core";
import React from "react";
import "./style.css";

const ComingSoon = ({ title = "" }) => {
  return (
    <>
      <Typography variant={"h6"}>Coming Soon...</Typography>
      <h1 className="ComingSoon my-5">{title}</h1>
    </>
  );
};

export default ComingSoon;
