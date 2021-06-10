import { useContext } from "react";
import { ThemeContext } from "../../lib/context";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi"

const ThemeToggler = () => {

 const { theme, setTheme } = useContext(ThemeContext)

 const handleThemeToggle = (e) => {
  e.preventDefault();
  setTheme(theme === 'light' ? 'dark' : 'light');
 }
 return (
  <button className="themetoggler" onClick={handleThemeToggle}>
   <span role="img" aria-label="switch theme">
    {theme === 'dark' ? <BiSun /> : <BsMoon />}
   </span>
  </button>
 )
}

export default ThemeToggler;