import { FC, useCallback, useMemo, useState } from 'react'
import Step from '../Step/Step'
import { InputType, StepType } from '../../utils/constants'
import { EventType, StepProps } from '../../types/Insurance'
import translate from '../../locales/i18n'

const AgeStep: FC<StepProps> = (props) => {
  const [age, setAge] = useState(0)
  const [invalidInputMessage, setInvalidInputMessage] = useState('')

  const handleOnChange = useCallback((event: EventType) => {
    const {
      target: { value },
    } = event
    setAge(Number(value))
  }, [])

  const validateAge = useCallback((): boolean => {
    if (age <= 0) {
      const message = translate('Steps.Age.errorMessage')
      setInvalidInputMessage(message)
      return false
    }
    return true
  }, [age])

  const isValid = useMemo(validateAge, [age])

  const onNextStep = useCallback(() => props.callback(StepType.age, age), [age])

  const inputs = useMemo(() => [
    {
      label: translate('Steps.Age.label'),
      inputType: InputType.number,
      initialValue: age,
      onChange: handleOnChange,
    },
  ], [age])

  return (
    <Step
      inputs={inputs}
      onNextStep={onNextStep}
      isInvalid={!isValid}
      errorMessage={invalidInputMessage}
    />
  )
}

export default AgeStep
