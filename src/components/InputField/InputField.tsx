import { FC, Fragment } from 'react'
import { InputFieldProps } from '../../types/Insurance'

const InputField: FC<InputFieldProps> = (props) => {
  const { label, onChange, inputType, initialValue } = props

  return (
    <Fragment>
      {label}
      <input required type={inputType} onChange={onChange} value={initialValue} />
    </Fragment>
  )
}

export default InputField
