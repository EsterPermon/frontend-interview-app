import { ElementType, lazy } from 'react'
import { StepType } from './constants'

export const mapStepToComponent = (step: StepType): ElementType | null => {
  switch (step) {
    case StepType.age:
      return lazy(() => import('../components/Steps/AgeStep/AgeStep'))

    case StepType.email:
      return lazy(() => import('../components/Steps/EmailStep/EmailStep'))

    case StepType.fullname:
      return lazy(() => import('../components/Steps/FullNameStep/FullNameStep'))

    default:
      return null
  }
}
