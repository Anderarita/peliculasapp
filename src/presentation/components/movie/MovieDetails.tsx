import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20, paddingBottom: 30}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>{movie.reating}</Text>
          <Text style={{marginLeft: 5, color: 'black'}}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold', color: 'black'}}>Historia</Text>
        <Text style={{fontSize: 16, color: 'black'}}>{movie.description}</Text>
        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold', color: 'black'}}>{Formatter.currency( movie.budget)}</Text>
      </View>
    </>
  );
};
