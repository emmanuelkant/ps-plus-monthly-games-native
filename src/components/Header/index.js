import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderTitle = styled.Text`
  color: #F9FAFC;
  font-size: 16px;
`;

const Wrapper = styled.View`
  padding: 24px;
  background-color: #0172CE;
  border-bottom-width: 1px;
  border-color: #0172CE;
  padding-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Header({ title, showCancel = true, hasNavigation = false }) {
  const navigation = useNavigation();

  return (
    <Wrapper>
      {hasNavigation && (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#F9FAFC" />
        </BorderlessButton>
      )}
      <HeaderTitle>{title}</HeaderTitle>
      <View />
    </Wrapper>
  )
}
