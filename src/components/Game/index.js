import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Game({ image, name, description, platform }) {
  const [isOpen, setIsOpen] = useState(false);

  const gameStyle = [styles.game, isOpen ? styles.open : styles.close]

  return (
    <TouchableOpacity style={[...gameStyle]} onPress={() => setIsOpen(!isOpen)}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: image[0].url,
          }}
        ></Image>
      </View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>{platform}</Text>
    </TouchableOpacity>
  )
}
