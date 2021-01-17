import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function About() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTexts}>
        <Text style={styles.title}>About the Developer</Text>
        <Text style={styles.text}>My name is Emmanuel Kant Duarte, and I made this app to help other gamers, like me, that wait patiently for the new PS Plus Monthly Games.</Text>
        <Text style={styles.text}>You can talk directly with me by email, that is emmanuelkant.duarte@gmail.com</Text>
        <Text style={styles.text}>I hope you enjoy it and spread it.</Text>
        <Text style={styles.text}>Don't forget to rate this app on store.</Text>
      </View>
    </View>
  )
}