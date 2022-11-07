import { FC } from 'react'
import { InputFieldProps } from '../../types/Insurance'
import InputFieldStyles from './InputFieldStyes'

const InputField: FC<InputFieldProps> = (props) => {
  const { label, onChange, inputType, initialValue } = props

  return (
    <InputFieldStyles>
      {label}
      <input required type={inputType} onChange={onChange} value={initialValue} />
    </InputFieldStyles>
  )
}

export default InputField
