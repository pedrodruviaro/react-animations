import React from "react";
import { Container } from "./styles.jsx";

export const CustomTitle = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
