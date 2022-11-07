import { FC } from 'react'
import { InputFieldProps } from '../../types/Insurance'
import InputField from '../InputField/InputField'
import translate from '../../locales/i18n'
import StepContainer from './StepStyles'
import {
  ERROR_MESSAGE_DATA_CY,
  NEXT_STEP_BUTTON_DATA_CY,
} from '../../utils/dataCyConstants'

interface StepProps {
  onNextStep: () => void
  isInvalid: boolean
  errorMessage: string
  inputs: InputFieldProps[]
  dataCy: string
}

const Step: FC<StepProps> = (props) => {
  const { inputs, onNextStep, isInvalid, errorMessage, dataCy } = props

  const renderInputFields = () => {
    return inputs.map((input, i) => {
      const { label, onChange, inputType, initialValue, dataCy } = input

      return (
        <InputField
          key={i}
          label={label}
          inputType={inputType}
          initialValue={initialValue}
          onChange={onChange}
          dataCy={dataCy}
        />
      )
    })
  }

  return (
    <StepContainer data-cy={dataCy}>
      {renderInputFields()}
      <button
        data-cy={NEXT_STEP_BUTTON_DATA_CY}
        disabled={isInvalid}
        onClick={onNextStep}
      >
        {translate('Basic.button.next')}
      </button>
      {isInvalid && (
        <span data-cy={ERROR_MESSAGE_DATA_CY} className="error-message">
          {errorMessage}
        </span>
      )}
    </StepContainer>
  )
}

export default Step
