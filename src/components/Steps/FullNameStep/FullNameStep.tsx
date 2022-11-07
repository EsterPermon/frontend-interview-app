import { FC, useCallback, useMemo, useReducer, useState } from 'react'
import Step from '../../Step/Step'
import { InputType, StepType } from '../../../utils/constants'
import { EventType, StepProps } from '../../../types/Insurance'
import translate from '../../../locales/i18n'
import { FIRST_NAME_INPUT_DATA_CY, FULL_NAME_STEP_DATA_CY, LAST_NAME_INPUT_DATA_CY } from '../../../utils/dataCyConstants'

type Name = {
  firstname: string
  lastname: string
  fullname: string
}

const initialname: Name = {
  firstname: '',
  lastname: '',
  fullname: '',
}

type ActionType = {
  type: string
  value: string
}

const FIRSTNAME = 'FIRSTNAME'
const LASTNAME = 'LASTNAME'

const nameReducer = (state: Name, action: ActionType): Name => {
  const { type, value } = action
  const { firstname, lastname } = state

  switch (type) {
    case FIRSTNAME:
      return { ...state, firstname: value, fullname: `${value} ${lastname}` }

    case LASTNAME:
      return { ...state, lastname: value, fullname: `${firstname} ${value}` }

    default:
      return state
  }
}

const FullNameStep: FC<StepProps> = (props) => {
  const [name, dispatchName] = useReducer(nameReducer, initialname)
  const [invalidInputMessage, setInvalidInputMessage] = useState('')
  const { fullname } = name

  type Field = typeof FIRSTNAME | typeof LASTNAME
  const handleOnChange = useCallback((event: EventType, type: Field) => {
    const {
      target: { value },
    } = event
    dispatchName({ type: type, value: value })
  }, [])

  const validateName = useCallback((): boolean => {
    const { firstname, lastname } = name
    let message
    if (!firstname) {
      message = translate('Steps.Fullname.errorMessage.firstname')
      setInvalidInputMessage(message)
      return false
    }
    if (!lastname) {
      message = translate('Steps.Fullname.errorMessage.lastname')
      setInvalidInputMessage(message)
      return false
    }
    return true
  }, [fullname])

  const isValid = useMemo(validateName, [fullname])

  const onNextStep = useCallback(
    () => props.callback(StepType.fullname, fullname),
    [fullname]
  )

  const inputs = useMemo(
    () => [
      {
        label: translate('Steps.Fullname.label.firstname'),
        inputType: InputType.text,
        initialValue: name.firstname,
        onChange: (event: EventType) => handleOnChange(event, FIRSTNAME),
        dataCy: FIRST_NAME_INPUT_DATA_CY
      },
      {
        label: translate('Steps.Fullname.label.lastname'),
        inputType: InputType.text,
        initialValue: name.lastname,
        onChange: (event: EventType) => handleOnChange(event, LASTNAME),
        dataCy: LAST_NAME_INPUT_DATA_CY
      },
    ],
    [fullname]
  )

  return (
    <Step
      dataCy={FULL_NAME_STEP_DATA_CY}
      inputs={inputs}
      onNextStep={onNextStep}
      isInvalid={!isValid}
      errorMessage={invalidInputMessage}
    />
  )
}

export default FullNameStep
