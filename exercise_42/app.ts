//task45
function makeCar(manufacturer: string, modelName: string, carInfo: {[key: string]: any}): {[key: string]: any} {
    carInfo['manufacturer'] = manufacturer;
    carInfo['model_name'] = modelName;
    return carInfo;
  }
  
  const cars = makeCar('suburu', 'outback', { color: 'blue', tow_package: true });
  console.log(cars);