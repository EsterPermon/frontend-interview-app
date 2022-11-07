import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ProductIds, PRODUCT_IDS_TO_NAMES } from '../utils/constants'
import translate from '../locales/i18n'

const HomePage = () => {
  return (
    <Fragment>
      <p>{translate('HomePage.title')}</p>
      <Link to="/buy/insurance_design">
        {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}
      </Link>
      <hr />
      <Link to="/buy/insurance_dev">
      {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}
      </Link>
    </Fragment>
  )
}

export default HomePage