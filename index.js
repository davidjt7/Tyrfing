import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Heroes from './src/components/Heroes';

AppRegistry.registerComponent(appName, () => Heroes);
