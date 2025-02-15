import {Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
//import {FullMovie} from '../../../core/entities/movie.entity';
import { useNavigation } from '@react-navigation/native';

interface Props {
  originalTitle: string;
  title: string;
  poster:string;
}

export const MovieHeader = ({originalTitle, title, poster}: Props) => {
  const {height: ScreenHeight} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <>
      <View style={{...styles.imageContainer, height: ScreenHeight * 0.7}}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{uri: poster}} />
        </View>  
      </View>
      <View style={styles.imageContainer}>
          <Text style={styles.subTitle}>{originalTitle}</Text>
          <Text style={styles.title}>{title}</Text> c
        </View>
        <View style={styles.backButton}>
            <Pressable onPress={()=> navigation.goBack()}>
                <Text style={styles.backButtonText}>Back </Text>
            </Pressable>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    padding: 10,
    borderRadius: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
