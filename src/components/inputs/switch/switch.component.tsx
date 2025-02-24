import "./switch.style.css"

interface SwitchProps {
  value?: string
  disabled?: boolean
  onChange?: (value: string | undefined) => void
}

export const Switch = ({value, disabled, onChange}: SwitchProps) => {
  return (
    <label className="switch">
      <input type={"checkbox"} value={value} disabled={disabled} onChange={() => onChange ? onChange(value) : null}/>
      <span className="slider"></span>
    </label>
  )
}