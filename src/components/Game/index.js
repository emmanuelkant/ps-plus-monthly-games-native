import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import styles from './styles';

export default function Game({ image, name, description, platform }) {
  const [isOpen, setIsOpen] = useState(false);

  const gameStyle = [styles.game, isOpen ? styles.open : styles.close]

  return (
    <Pressable style={[...gameStyle]} onPress={() => setIsOpen(!isOpen)}>
      <Image
        style={styles.image}
        source={{
          uri: image[0].url,
        }}
      ></Image>
      <View style={styles.wrapperTexts}>
        <Text style={[styles.text, styles.gameName]}>{name}</Text>
        <Text style={[styles.text, styles.gamePlatform]}>Platform: {platform}</Text>
        <Text style={[styles.text, styles.gameDescription]}>About the game: {description}</Text>
      </View>
    </Pressable>
  )
}
