import "./App.css";
import PrincipalContainer from "./components/principalContainer.component";
import useLocalStorage from "use-local-storage";

const App = () => {
  const preferenceTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", preferenceTheme);
  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <PrincipalContainer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
