// 

import { useState, useEffect } from "react";

function Theme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const styles = {
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "40px"
    };

    return (
        <div style={styles}>
            <h2>{theme.toUpperCase()} MODE</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Theme;
