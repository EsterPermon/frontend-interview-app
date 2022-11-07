import { ElementType, lazy } from 'react'
import { StepType } from './constants'

export const mapStepToComponent = (step: StepType): ElementType | null => {
  switch (step) {
    case StepType.age:
      return lazy(() => import('../components/Steps/AgeStep'))

    case StepType.email:
      return lazy(() => import('../components/Steps/EmailStep'))

    case StepType.fullName:
      return lazy(() => import('../components/Steps/FullNameStep'))

    default:
      return null
  }
}
