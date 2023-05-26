"use client";

import * as React from "react";

export const Button = ({ className } : { className: string}) => {
  return <button className={className} onClick={() => alert("boop")}>Boop</button>;
};
