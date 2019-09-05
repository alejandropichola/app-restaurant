import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

// import screen
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
  search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})

export default createAppContainer(navigator)