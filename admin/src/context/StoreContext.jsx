import { createContext, useEffect, useState } from "react";

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const SavedTheme = localStorage.getItem("theme") || "dark";
    setTheme(SavedTheme);
    document.documentElement.setAttribute("data-theme", SavedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const ContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
