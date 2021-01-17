import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  game: {
    width: '95%',
    flex: 1,
    marginBottom: 30,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#2b2a30',
  },
  image: {
    width: '100%',
    height: 180,
  },
  wrapperTexts: {
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  text: {
    color: '#dfe2e6',
    lineHeight: 20,
  },
  gameName: {
    fontSize: 20,
  },
  gameDescription: {
    marginTop: 10,
  },
  gamePlatform: {
    marginTop: 10,
  },
});
