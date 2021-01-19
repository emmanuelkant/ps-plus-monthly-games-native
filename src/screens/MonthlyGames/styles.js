import { Dimensions, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingBottom: 40,
    backgroundColor: '#1a191e',
    flex: 1,
  },
  wrapperLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperGames: {
    alignItems: 'center',
  },
  text: {
    color: '#c8cdd3',
  },
  title: {
    color: '#c8cdd3',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  wrapperError: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapperErrorText: {
    flex: 1,
    justifyContent: 'center'
  },
  tryAgainButton: {
    width: Dimensions.get('window').width - 30,
    paddingVertical: 15,
    backgroundColor: '#0172CE',
    borderRadius: 10,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 32,
    color: '#F9FAFC',
    fontWeight: 'bold',
  },
  tryAgainText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#F9FAFC',
    fontWeight: 'bold',
  },
});
