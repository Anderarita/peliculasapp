import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../routes/Navigation';

import { useMoviesOneMovie } from '../../hooks/useMoviesOneMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{

}

export const Details = ({route}: Props) => {
  //const {movieId} = useRoute().params;
  const {movieId} = route.params;
  const {movie, isLoading} = useMoviesOneMovie(movieId);

  if(isLoading){
    return <FullScreenLoader/>
  }
  console.log(movie)
  return (
    <ScrollView>
      <MovieHeader originalTitle={movie!.originalTitle}
      title={movie!.title}
      poster={movie!.poster}/>
      <MovieDetails movie={movie!}/>
    </ScrollView>
  );
};
