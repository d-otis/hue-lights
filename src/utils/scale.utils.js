const scale = (input, inputRange = [0, 360], outputRange = [0, 65535]) => {
  const [outputMin, outputMax] = outputRange;
  const [inputMin, inputMax] = inputRange;

  const percent = (input - inputMin) / (inputMax - inputMin);
  const output = percent * (outputMax - outputMin) + outputMin;

  return output;
};

export default scale