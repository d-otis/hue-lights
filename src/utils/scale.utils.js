const scale = (inputY, yRange = [0, 360], xRange = [0, 65535]) => {
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  const percent = (inputY - yMin) / (yMax - yMin);
  const outputX = percent * (xMax - xMin) + xMin;

  return outputX;
};

export default scale