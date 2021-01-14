import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text, ActivityIndicator } from 'react-native';

import { MonthGames } from './monthlyGames.query';
import { useFetch } from '../../service/fetch';


const Wrapper = styled.View`
  background-color: #eee;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default function MonthlyGames() {
  const [monthGames, setMonthGames] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const data = await useFetch(MonthGames);
      setMonthGames(data.monthGames);
    }

      getData();
  });

  if (monthGames.length === 0) {
    return (
      <Wrapper>
        <ActivityIndicator size={80} color="#0172CE" />
        <Text>Searching for new games...</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Text>Here we go</Text>
    </Wrapper>
  )
}