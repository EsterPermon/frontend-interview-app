import { Link } from 'react-router-dom'
import { ProductIds, PRODUCT_IDS_TO_NAMES } from '../../utils/constants'
import translate from '../../locales/i18n'
import HomePageContainer from './HomePageStyes'

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>{translate('HomePage.title')}</h1>
      <Link to="/buy/insurance_design">
        {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}
      </Link>
      <Link to="/buy/insurance_dev">
      {translate('HomePage.getStarted')} {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}
      </Link>
    </HomePageContainer>
  )
}

export default HomePage