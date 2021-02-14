import React, { useEffect, useState, useRef } from 'react';
import {
  AdMobBanner,
} from 'expo-ads-admob';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, ActivityIndicator, View, ScrollView } from 'react-native';
import * as Notifications from 'expo-notifications';

import styles from './styles';
import { MonthGames } from './monthlyGames.query';
import { useFetch } from '../../service/fetch';
import { registerForPushNotificationsAsync } from '../../service/push-notification';

import Game from '../../components/Game';

export default function MonthlyGames() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [monthGames, setMonthGames] = useState([]);

  useEffect(() => {
    if (!monthGames[0]) {
      getData();
    }
  });

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(() => {});
    responseListener.current = Notifications.addNotificationResponseReceivedListener(() => {});

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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
        <Text style={[styles.text, styles.title]}>{monthGames[0].title}</Text>
        <Text style={[styles.text, styles.details]}>Was announced at: {monthGames[0].announcement}</Text>
        <Text style={[styles.text, styles.details]}>Will be available from: {monthGames[0].release}</Text>
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
