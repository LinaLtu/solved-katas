//Kata: https://www.codewars.com/kata/can-i-have-cake/train/javascript

const liquids = ['oil', 'milk'];
const solids = ['sugar', 'flour'];

/**
 * @param {string} quantity
 * @return {integer}
 */
function convertQuantityStringToNumber(quantity) {
  let convertedQuantity;

  // '7/4' ==> ['7', '4'] ===> 7/4
  // '7' ==> ['7', 1] ===> 7/1 = 7

  const pieces = quantity.split('/');
  if (!pieces[1]) {
    pieces[1] = 1;
  }

  return parseInt(pieces[0], 10) / parseInt(pieces[1], 10);
}

/**
 * @param {integer} quantity
 * @param {string} unit
 * @param {bool} isLiquid
 * @return {integer}
 */
function convertToEuropeanMeasurement(quantity, unit, isLiquid = false) {
  let result;
  switch(unit) {
    case "cup":
      result = isLiquid ? 220 * quantity : 200 * quantity;
      break;
    case "tbsp":
      result = isLiquid ? 15 * quantity : 14 * quantity;;
      break;
    case "tsp":
      result = 5 * quantity;
      break;
    default:
      throw new Error('Invalid unit');
  }

  return isLiquid ?
    result.toString() + " ml" :
    result.toString() + " g";
}

/**
 * @param {string} measurement
 * @param {bool} isLiquid
 * @return {string}
 */
function convertMeasurement(measurement, isLiquid) {
  const [ quantity, unit ] = measurement.split(' ');
  const convertedQuantity = convertQuantityStringToNumber(quantity);
  return convertToEuropeanMeasurement(convertedQuantity, unit, isLiquid);
}

/**
 * @param {object} recipe
 * @return {object}
 */
function convertRecipeToEuropeanMeasurements(recipe) {
  let convertedRecipe = {}

  for (const product in recipe) {
    console.log('product', product);
    if (liquids.includes(product)) {
      convertedRecipe[product] = convertMeasurement(recipe[product], true);
    } else if (solids.includes(product)) {
      convertedRecipe[product] = convertMeasurement(recipe[product], false);
    } else {
      throw new Error('Invalid product');
    }
  }

  return convertedRecipe;
}


/**
 * @param {object} available
 * @param {object} recipe
 * @return {string}
 */
function compareRecipes(available, recipe) {
  const missingProducts = [];

  for (const product in recipe) {
     if (
       !available[product] ||
       parseInt(available[product].split(' ')[0], 10) < parseInt(recipe[product].split(' ')[0], 10)
     ) {
       missingProducts.push(product);
     }
  }

  if (missingProducts.length === 0) {
    return "You can bake"
  } else {
    return "Not enough ingredients: need " + missingProducts.join(', ');
  }
}

/**
 * @param {object} available
 * @param {object} recipe
 * @return {string}
 */
function canBake(available, recipe) {
  const convertedRecipe = convertRecipeToEuropeanMeasurements(recipe);
  return compareRecipes(available, convertedRecipe);
}
