import { useFonts } from 'expo-font';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/Montserrat-Regular.ttf'),
    'Montserrat Bold': require('./assets/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ProfileScreen />;
}