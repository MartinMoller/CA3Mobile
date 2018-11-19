import { createStackNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './Welcome';
import DataScreen from './Data';


const AppNavigator = createStackNavigator({
  Welcome: { screen: WelcomeScreen },
  Data: { screen: DataScreen },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
