import React, { useEffect, useState } from 'react';
import {
  AdMobBanner,
} from 'expo-ads-admob';
import { Text, ActivityIndicator, View, ScrollView, Image } from 'react-native';
import styles from './styles';

import Game from '../../components/Game';

import { MonthGames } from './monthlyGames.query';
import { useFetch } from '../../service/fetch';

export default function MonthlyGames() {
  const [monthGames, setMonthGames] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const data = await useFetch(MonthGames);
      setMonthGames(data.monthGames);
    }

    if (!monthGames[0]) {
      getData();
    }
  });

  if (!monthGames[0]) {
    return (
      <View style={[styles.wrapper, styles.wrapperLoading]}>
        <ActivityIndicator size={60} color="#0172CE" />
        <Text style={styles.text}>Searching for the new games...</Text>
      </View>
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