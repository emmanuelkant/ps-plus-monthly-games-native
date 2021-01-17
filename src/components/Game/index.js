import React, { useState, useRef } from 'react';
import { Animated, View, Text, Image, Pressable, Easing } from 'react-native';

import styles from './styles';

export default function Game({ image, name, description, platform }) {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const [isOpen, setIsOpen] = useState(false);
  const heightAnim = useRef(new Animated.Value(150)).current;

  const toggleHeight = () => {
    Animated.timing(heightAnim, {
      toValue: isOpen ? 150 : 550,
      duration: 450,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return (
    <AnimatedPressable
      style={[styles.game, { height: heightAnim }]} 
      onPress={() => {
        setIsOpen(!isOpen);
        toggleHeight();
      }}
    >
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
    </AnimatedPressable>
  )
}
