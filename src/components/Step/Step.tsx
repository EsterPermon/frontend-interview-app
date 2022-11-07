import { FC } from 'react'
import { InputFieldProps } from '../../types/Insurance'
import InputField from '../InputField/InputField'
import translate from '../../locales/i18n'
import StepContainer from './StepStyles'

interface StepProps {
  onNextStep: () => void
  isInvalid: boolean
  errorMessage: string
  inputs: InputFieldProps[]
}

const Step: FC<StepProps> = (props) => {
  const { inputs, onNextStep, isInvalid, errorMessage } = props

  const renderInputFields = () => {
    return inputs.map((input, i) => {
      const { label, onChange, inputType, initialValue } = input

      return (
        <InputField
          key={i}
          label={label}
          inputType={inputType}
          initialValue={initialValue}
          onChange={onChange}
        />
      )
    })
  }

  return (
    <StepContainer>
      {renderInputFields()}
      <button disabled={isInvalid} onClick={onNextStep}>
        {translate('Basic.button.next')}
      </button>
      {isInvalid && <span className="error-message">{errorMessage}</span>}
    </StepContainer>
  )
}

export default Step
