import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, View, ScrollView, Image } from 'react-native';
import styles from './styles';

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
  console.log(monthGames[0])
  return (
    <ScrollView style={[styles.wrapper, styles.wrapperContent]}>
      <Text style={styles.text}>{monthGames[0].title}</Text>
      {monthGames[0].games.map(game => (
        <View key={game.id}>
          
          <View>
            <Image
              style={styles.image}
              source={{
                uri: game.image[0].url,
              }}
            ></Image>
            <Text style={styles.text}>{game.name}</Text>
            <Text style={styles.text}>{game.description}</Text>
            <Text style={styles.text}>{game.platform}</Text>
          </View>
        </View>  
      ))}
      <Text style={styles.text}>Here we go</Text>
    </ScrollView>
  )
}