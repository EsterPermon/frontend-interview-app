import { Link } from 'react-router-dom'
import { ProductIds, PRODUCT_IDS_TO_NAMES } from '../../utils/constants'
import translate from '../../locales/i18n'
import HomePageContainer from './HomePageStyes'
import { DESIGN_INSURANCE_DATA_CY, DEV_INSURANCE_DATA_CY, HOME_PAGE_DATA_CY } from '../../utils/dataCyConstants'

const HomePage = () => {
  return (
    <HomePageContainer data-cy={HOME_PAGE_DATA_CY}>
      <h1>{translate('HomePage.title')}</h1>
      <Link data-cy={DESIGN_INSURANCE_DATA_CY} to="/buy/insurance_design">
        {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}
      </Link>
      <Link data-cy={DEV_INSURANCE_DATA_CY} to="/buy/insurance_dev">
      {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}
      </Link>
    </HomePageContainer>
  )
}

export default HomePage