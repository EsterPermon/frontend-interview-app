import {
  ElementType,
  Fragment,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { ProductIds, PRODUCT_IDS_TO_NAMES, StepType } from '../../utils/constants'
import SummaryStep from '../../components/Steps/SummaryStep/SummaryStep'
import { PurchaseDataType } from '../../types/Insurance'
import { mapStepToComponent } from '../../utils/workflow'
import translate from '../../locales/i18n'

interface BuyflowProps {
  productId: ProductIds
  steps: StepType[]
}

const Buyflow: ElementType<BuyflowProps> = (props) => {
  const { productId, steps } = props
  const [currentStepId, setStepId] = useState(0)
  const [collectedData, updateData] = useState<PurchaseDataType[]>([])
  const currentStep = useMemo(() => steps[currentStepId], [currentStepId])

  const getStepCallback = () => (field: string, value: number | string) => {
    updateData((prev) => [...prev, { field, value }])
    setStepId((prev) => prev + 1)
  }

  const fallBack = useMemo(() => <Fragment>{translate('Buyflow.stepNotFound')}</Fragment>, [])

  const renderSteps = useCallback(() => {
    if (currentStep === StepType.summary) {
      return <SummaryStep collectedData={collectedData} productId={productId} />
    }
    const StepComponent = mapStepToComponent(currentStep)
    if (StepComponent) {
      return (
        <Suspense fallback={fallBack}>
          <StepComponent callback={getStepCallback()} />
        </Suspense>
      )
    }
    return fallBack
  }, [currentStep])

  return (
    <Fragment>
      <h4>{translate('Buyflow.title')} {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {renderSteps()}
    </Fragment>
  )
}

export default Buyflow
