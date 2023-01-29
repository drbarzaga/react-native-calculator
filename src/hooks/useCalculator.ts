import {useRef, useState} from 'react';

enum Operator {
  sum,
  minus,
  multiply,
  divide,
}

function useCalculator() {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operator>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (value: string) => {
    // Not allow multiple dot
    if (number.includes('.') && value === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (value === '.') {
        setNumber(number + value);
      } else if (number.includes('.') && value === '0') {
        setNumber(number + value);
      } else if (!number.includes('.') && value !== '0') {
        setNumber(value);
      } else if (!number.includes('.') && value === '0') {
        setNumber(number);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberByPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const del = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const btnDivide = () => {
    changeNumberByPrevious();
    lastOperation.current = Operator.divide;
  };

  const btnMultiply = () => {
    changeNumberByPrevious();
    lastOperation.current = Operator.multiply;
  };

  const btnMinus = () => {
    changeNumberByPrevious();
    lastOperation.current = Operator.minus;
  };

  const btnSum = () => {
    changeNumberByPrevious();
    lastOperation.current = Operator.sum;
  };

  const calculate = () => {
    const operator1 = Number(number);
    const operator2 = Number(previousNumber);
    switch (lastOperation.current) {
      case Operator.sum:
        setNumber(`${operator1 + operator2}`);
        break;
      case Operator.minus:
        setNumber(`${operator2 - operator1}`);
        break;
      case Operator.multiply:
        setNumber(`${operator1 * operator2}`);
        break;
      case Operator.divide:
        setNumber(`${operator1 !== 0 ? operator2 / operator1 : 'Error'}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
    values: {
      number,
      previousNumber,
    },
    actions: {
      clear,
      buildNumber,
      positiveNegative,
      changeNumberByPrevious,
      del,
      btnDivide,
      btnMultiply,
      btnMinus,
      btnSum,
      calculate,
    },
  };
}

export default useCalculator;
