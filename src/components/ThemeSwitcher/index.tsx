import './style.css'


function ThemeSwitcher() {
  return (

    <ul>
      <li><input id="light-theme" name="theme" type="radio" checked /></li>
      <li><input id="dark-theme" name="theme" type="radio" /></li>
    </ul>

  )
}

export default ThemeSwitcher
