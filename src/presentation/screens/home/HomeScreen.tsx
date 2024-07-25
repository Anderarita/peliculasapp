import {View} from 'react-native';
import {useMovie} from '../../hooks/useMovie';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovie();
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage}/>
        <HorizontalCarousel movies={topRated} title='Mejores Calificadas'/>
        <HorizontalCarousel movies={upcoming} title='Proximamente'/>
      </View>
    </ScrollView>
  );
};
