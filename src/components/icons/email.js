import React from "react";
import { colors } from "../../links";

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    width="32"
    height="32"
    stroke={colors.yellow}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-mail"
  >
    <title>Email</title>
    <path d="M3 6l9 6 9-6" />
    <path d="M21 18H3v-2l9-6 9 6v2z" />
    <path d="M10 9L3 18h18L10 9z" />
  </svg>
);

export default EmailIcon;
