import React from "react";
import styles from "./Button.module.css"; 
export default function App() {
const headingStyle = {
color: "green",
textAlign: "center",
}; fontSize: "24px",
return (
<div>
{/* Inline styled heading */}
<h1 style={headingStyle}>Hello React Styling!</h1>
{/* CSS Module styled button */}
<button className={styles.btn}>Click Me</button>
</div>
);
