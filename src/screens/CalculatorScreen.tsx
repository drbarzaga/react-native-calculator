import React from 'react';
import {Text, View} from 'react-native';
import Button from '../components/Button';

import {styles} from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {values, actions} = useCalculator();

  return (
    <View style={styles.container}>
      {values.previousNumber !== '0' && (
        <Text style={styles.smallResult}>{values.previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {values.number}
      </Text>

      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" onPress={actions.clear} />
        <Button text="+/-" color="#9B9B9B" onPress={actions.positiveNegative} />
        <Button text="del" color="#9B9B9B" onPress={actions.del} />
        <Button text="/" color="#FF9427" onPress={actions.btnDivide} />
      </View>

      <View style={styles.row}>
        <Button text="7" onPress={actions.buildNumber} />
        <Button text="8" onPress={actions.buildNumber} />
        <Button text="9" onPress={actions.buildNumber} />
        <Button text="x" color="#FF9427" onPress={actions.btnMultiply} />
      </View>

      <View style={styles.row}>
        <Button text="4" onPress={actions.buildNumber} />
        <Button text="5" onPress={actions.buildNumber} />
        <Button text="6" onPress={actions.buildNumber} />
        <Button text="-" color="#FF9427" onPress={actions.btnMinus} />
      </View>

      <View style={styles.row}>
        <Button text="1" onPress={actions.buildNumber} />
        <Button text="2" onPress={actions.buildNumber} />
        <Button text="3" onPress={actions.buildNumber} />
        <Button text="+" color="#FF9427" onPress={actions.btnSum} />
      </View>

      <View style={styles.row}>
        <Button text="0" expanded onPress={actions.buildNumber} />
        <Button text="." onPress={actions.buildNumber} />
        <Button text="=" color="#FF9427" onPress={actions.calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
