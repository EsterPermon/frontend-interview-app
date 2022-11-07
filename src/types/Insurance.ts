import { ChangeEvent } from 'react'
import { InputType } from '../utils/constants'

export type EventType = ChangeEvent<HTMLInputElement>

export interface InputFieldProps {
  label: string
  onChange: (event: EventType) => void
  inputType: InputType
  initialValue: number | string
}

