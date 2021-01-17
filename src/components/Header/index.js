import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Header({ title, hasNavigation = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      {hasNavigation && (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#F9FAFC" />
        </BorderlessButton>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <BorderlessButton onPress={() => navigation.navigate('About')}>
        <Feather name="info" size={24} color="#F9FAFC" />
      </BorderlessButton>
    </View>
  )
}
