import Reactotron, {networking} from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .use(
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }),
  )
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
