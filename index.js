if (__DEV__) {
  if (
    !new (class {
      x;
    })().hasOwnProperty('x')
  ) {
    throw new Error('Transpiler is not configured correctly');
  }

  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
