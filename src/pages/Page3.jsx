import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
function Page3() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
                <h1>Page3 + them {theme}</h1>
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}

export default Page3;