const scale = (input, config) => {

  if (config !== 'toBulb' && config !== 'toPicker') { 
    console.error("scale() config string should be either 'toBulb' or 'toPicker'")
    return
   } 

  const pickerRange = [0, 360]
  const bulbRange = [0, 65535]

  const [outputMin, outputMax] = config === 'toBulb' ? bulbRange : pickerRange
  const [inputMin, inputMax] = config === 'toBulb' ? pickerRange : bulbRange

  const percent = (input - inputMin) / (inputMax - inputMin);
  const output = Math.round(percent * (outputMax - outputMin) + outputMin);

  return output;
};

export default scale