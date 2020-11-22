import React from "react";
import Styles from "./Typography.module.scss";

export const H1 = ({ children }) => <h1 className={Styles.h1}>{children}</h1>;

export const H2 = ({ children }) => <h2 className={Styles.h2}>{children}</h2>;

export const H3 = ({ children }) => <h3 className={Styles.h3}>{children}</h3>;

export const H4 = ({ children }) => <h4 className={Styles.h4}>{children}</h4>;

export const H5 = ({ children }) => <h5 className={Styles.h5}>{children}</h5>;

export const P = ({ children }) => <p className={Styles.p}>{children}</p>;

export const B = ({ children }) => <b className={Styles.bold}>{children}</b>;

export const Hr = ({ children }) => <hr className={Styles.hr} />;
