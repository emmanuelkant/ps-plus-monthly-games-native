import React, { useEffect, useState } from 'react';
import {
  AdMobBanner,
} from 'expo-ads-admob';
import { Text, ActivityIndicator, View, ScrollView, Image } from 'react-native';
import styles from './styles';

import Game from '../../components/Game';

import { MonthGames } from './monthlyGames.query';
import { useFetch } from '../../service/fetch';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MonthlyGames() {
  const [monthGames, setMonthGames] = useState([]);

  useEffect(() => {
    if (!monthGames[0]) {
      getData();
    }
  });

  const getData = async () => {
    const data = await useFetch(MonthGames);
    setMonthGames(data.monthGames);
  }

  const retry = () => {
    setMonthGames({});
    getData();
  }

  if (!monthGames.error && !monthGames[0]) {
    return (
      <View style={[styles.wrapper, styles.wrapperLoading]}>
        <ActivityIndicator size={60} color="#0172CE" />
        <Text style={styles.text}>Searching for the new games...</Text>
      </View>
    );
  }

  if (monthGames.error) {
    return (
      <View style={[styles.wrapper, styles.wrapperError]}>
        <View style={styles.wrapperErrorText}>
          <Text style={styles.errorText}>Ops...Something went wrong!</Text>
        </View>
        <TouchableOpacity style={styles.tryAgainButton} onPress={retry}>
          <Text style={styles.tryAgainText}>Try Again</Text>
        </TouchableOpacity>
      </View >
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Text style={styles.title}>{monthGames[0].title}</Text>
        <View style={styles.wrapperGames}>
          {monthGames[0].games.map(game => (
            <Game key={game.id} {...game} />
          ))}
        </View>
      </ScrollView>
      <AdMobBanner
        style={{ position: 'absolute', bottom: 0, left: 0 }}
        bannerSize="smartBannerLandscape"
        adUnitID="ca-app-pub-3165514241000003/6889919789"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(e) => console.error(e)} />
    </View>
  )
}