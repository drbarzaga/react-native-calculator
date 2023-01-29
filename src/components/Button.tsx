/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

type Props = {
  text: string;
  color?: string;
  expanded?: boolean;
  onPress: (value: string) => void;
};

const Button = ({
  text,
  color = '#2D2D2D',
  expanded = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: expanded ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
