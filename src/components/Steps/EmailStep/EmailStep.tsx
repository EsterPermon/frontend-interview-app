import { FC, useCallback, useState, useMemo } from 'react'
import { EventType, StepProps } from '../../../types/Insurance'
import { InputType, StepType } from '../../../utils/constants'
import Step from '../../Step/Step'
import translate from '../../../locales/i18n'

const EmailStep: FC<StepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [invalidInputMessage, setInvalidInputMessage] = useState('')

  const handleOnChange = useCallback((event: EventType) => {
    const {
      target: { value },
    } = event
    setEmail(value)
  }, [])

  const validateEmail = useCallback((): boolean => {
    let message = ''
    if (!email.length) {
      message = translate('Steps.Email.errorMessage.empty')
      setInvalidInputMessage(message)
      return false
    }
    const emailRegex = /[\s\S]+@[a-z]+.com$/i
    if (!email.match(emailRegex)) {
      message = translate('Steps.Email.errorMessage.invalid')
      setInvalidInputMessage(message)
      return false
    }
    return true
  }, [email])

  const isValid = useMemo(validateEmail, [email])

  const onNextStep = useCallback(() => props.callback(StepType.email, email), [email])

  const inputs = useMemo(() => [
    {
      label: translate('Steps.Email.label'),
      inputType: InputType.text,
      initialValue: email,
      onChange: handleOnChange,
    },
  ], [email])

  return (
    <Step
      inputs={inputs}
      onNextStep={onNextStep}
      isInvalid={!isValid}
      errorMessage={invalidInputMessage}
    />
  )
}

export default EmailStep
