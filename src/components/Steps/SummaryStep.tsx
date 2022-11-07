import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PurchaseDataType } from '../../types/Insurance'
import { ProductIds } from '../../utils/constants'

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
          {field}: {value}
        </div>
      )
    })
  }

  return (
    <Fragment>
      {renderPurchaseData()}
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </Fragment>
  )
}

export default SummaryStep
