import {Text, View} from 'react-native';
import { useMovie } from '../../hooks/useMovie';

export const HomeScreen = () => {
  const {nowPlaying, popular} = useMovie();

  console.log(popular[1])
  return (
    <View>
      <Text style={{color: 'black'}}>HomeScreen</Text>
    </View>
  );
};

