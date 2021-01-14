import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import { MonthGames } from './monthlyGames.query';
import { useFetch } from '../../service/fetch';


const Wrapper = styled.View`
  background-color: #eee;
`;

export default function MonthlyGames() {

  useEffect(() => {
    async function anyNameFunction() {
      const data = await useFetch(MonthGames);
      console.log(data)
    }

    anyNameFunction();
  
  })


  return (
    <Wrapper>
      <Text>Here when go</Text>
    </Wrapper>
  )
}