import React from "react";
import Styles from "./Note.module.scss";

const Note = ({ note }) => <p className={Styles.root}>{note}</p>;

export default Note;
