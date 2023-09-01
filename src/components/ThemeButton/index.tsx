import './style.css'
interface ThemeButtonProps {
  functionOnClick: () => void
}
export const ThemeButton = ({ functionOnClick }: ThemeButtonProps) => {
  return (
    <button onClick={() => functionOnClick()} className="themeIcon">
      <span></span>
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span></span>
    </button>
  )
}
