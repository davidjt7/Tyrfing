import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Heroes from './src/components/Heroes';
import Menu from './src/components/Menu';
import TabHome from './src/components/TabHome';
import AllHeroes from './src/components/AllHeroes';

AppRegistry.registerComponent(appName, () => AllHeroes);
