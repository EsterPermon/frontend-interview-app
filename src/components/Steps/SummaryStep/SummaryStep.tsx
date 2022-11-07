import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PurchaseDataType } from '../../../types/Insurance'
import { ProductIds } from '../../../utils/constants'
import SummaryStepStyles from './SummaryStepStyles'

interface SummaryStepProps {
  collectedData: PurchaseDataType[]
  productId: ProductIds
}

const SummaryStep: FC<SummaryStepProps> = (props) => {
  const { collectedData, productId } = props

  const renderPurchaseData = () => {
    return collectedData.map((data, i) => {
      const { field, value } = data
      return (
        <div key={i}>
          <span className="field">{field}:</span> {value}
        </div>
      )
    })
  }

  return (
    <SummaryStepStyles>
      <div className="infos">{renderPurchaseData()}</div>
      <div className="confirm">
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </SummaryStepStyles>
  )
}

export default SummaryStep
