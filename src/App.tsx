import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Buyflow from './pages/Buyflow/Buyflow'
import {
  DesignInsuranceSteps,
  DevInsuranceSteps,
  ProductIds,
} from './utils/constants'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_design">
            <Buyflow
              steps={DesignInsuranceSteps}
              productId={ProductIds.designIns}
            />
          </Route>
          <Route path="/buy/insurance_dev">
            <Buyflow steps={DevInsuranceSteps} productId={ProductIds.devIns} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
