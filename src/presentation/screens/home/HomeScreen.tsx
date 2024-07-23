import {Text, View} from 'react-native';
import { useMovie } from '../../hooks/useMovie';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {nowPlaying, popular} = useMovie();
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, paddingBottom:30}}>
      <PosterCarousel movies={nowPlaying}/>
    </View>
  );
};

