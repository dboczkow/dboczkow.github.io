import { ChangeEvent } from 'react';
import "./style.css"

interface SwitchProps {
  onChecked: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Switch = (props : SwitchProps) => {

  const { onChecked } = props;

  return (
    <label className="switch">
      <input type="checkbox" onChange={(event) => onChecked(event)}/><span className="slider"></span>
  </label>
  )
}