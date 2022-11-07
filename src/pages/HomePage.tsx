import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ProductIds, PRODUCT_IDS_TO_NAMES } from '../utils/constants'

const HomePage = () => {
  return (
    <Fragment>
      <p>Welcome to Getsafe's Insurances</p>
      <Link to="/buy/insurance_design">
        Get started with {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}
      </Link>
      <hr />
      <Link to="/buy/insurance_dev">
        Get started with {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}
      </Link>
    </Fragment>
  )
}

export default HomePage