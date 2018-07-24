// Generates a key in the format of YYYYMMDD
export function genMealLogDateKey(date) {
  let dateNum = date.getDate();
  let monthNum = (date.getMonth() + 1);
  let dateStr;
  let monthStr;
  if (dateNum > 9) {
    dateStr = dateNum.toString();
  } else {
    dateStr = '0' + dateNum.toString();
  }
  if (monthNum > 9) {
    monthStr = monthNum.toString();
  } else {
    monthStr = '0' + monthNum.toString();
  }
  return (
    date.getFullYear().toString() +
    monthStr +
    dateStr
  );
}

// Finds suspect meals under YYYYMMDD > Breakfast/Lunch/Dinner > Meal Array for App state, branching prevents overwriting of existing objects
export function getSuspectMeals(masterMealLog, suspectMeals, mealLogDateKey, time) {
  let lookupMeal1;
  let lookupMeal2;
  let lookupMealIndex1;
  let lookupMealIndex2;
  let lookupMealDate1;
  let lookupMealDate2;
  if (time === 'Morning') {
    lookupMeal1 = 'Dinner';
    lookupMeal2 = 'Lunch';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 2;
    lookupMealIndex2 = lookupMealIndex1;
  } else if (time === 'Afternoon') {
    lookupMeal1 = 'Breakfast';
    lookupMeal2 = 'Dinner';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
    lookupMealIndex2 = lookupMealIndex1 - 1 ;
  } else {
    lookupMeal1 = 'Lunch';
    lookupMeal2 = 'Breakfast';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
    lookupMealIndex2 = lookupMealIndex1;
  }
  lookupMealDate1 = Object.keys(masterMealLog)[lookupMealIndex1];
  lookupMealDate2 = Object.keys(masterMealLog)[lookupMealIndex2];
  let newSuspectMeals;
  if (lookupMealDate1 === lookupMealDate2 && suspectMeals[lookupMealDate1] === undefined) {
    newSuspectMeals = Object.assign({}, suspectMeals, {
      [lookupMealDate1]: { [lookupMeal1]: masterMealLog[lookupMealDate1][lookupMeal1] },
    });
    newSuspectMeals[lookupMealDate2][lookupMeal2] = masterMealLog[lookupMealDate2][lookupMeal2];
  } else if (suspectMeals[lookupMealDate1] === undefined && suspectMeals[lookupMealDate2] === undefined) {
    newSuspectMeals = Object.assign({}, suspectMeals, {
      [lookupMealDate1]: { [lookupMeal1]: masterMealLog[lookupMealDate1][lookupMeal1] },
      [lookupMealDate2]: { [lookupMeal2]: masterMealLog[lookupMealDate2][lookupMeal2] }
    });
  } else if (lookupMealDate1 !== lookupMealDate2 && suspectMeals[lookupMealDate1] === undefined) {
    newSuspectMeals = Object.assign({}, suspectMeals, {
      [lookupMealDate1]: { [lookupMeal1]: masterMealLog[lookupMealDate1][lookupMeal1] },
    });
    newSuspectMeals[lookupMealDate2][lookupMeal2] = masterMealLog[lookupMealDate2][lookupMeal2];
  } else if (lookupMealDate1 !== lookupMealDate2 && suspectMeals[lookupMealDate2] === undefined) {
    newSuspectMeals = Object.assign({}, suspectMeals, {
      [lookupMealDate2]: { [lookupMeal2]: masterMealLog[lookupMealDate2][lookupMeal2] },
    });
    newSuspectMeals[lookupMealDate1][lookupMeal1] = masterMealLog[lookupMealDate1][lookupMeal1];
  } else {
    newSuspectMeals = Object.assign({}, suspectMeals);
    newSuspectMeals[lookupMealDate1][lookupMeal1] = masterMealLog[lookupMealDate1][lookupMeal1];
    newSuspectMeals[lookupMealDate2][lookupMeal2] = masterMealLog[lookupMealDate2][lookupMeal2];
  }
  return newSuspectMeals;
}

// Finds suspect meals to display on TrackSubmit screen
export function displaySuspectMeals(masterMealLog, mealLogDateKey, time) {
  let lookupMeal1;
  let lookupMeal2;
  let lookupMealIndex1;
  let lookupMealIndex2;
  let lookupMealDate1;
  let lookupMealDate2;
  if (time === 'Morning') {
    lookupMeal1 = 'Dinner';
    lookupMeal2 = 'Lunch';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 2;
    lookupMealIndex2 = lookupMealIndex1;
  } else if (time === 'Afternoon') {
    lookupMeal1 = 'Breakfast';
    lookupMeal2 = 'Dinner';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
    lookupMealIndex2 = lookupMealIndex1 - 1 ;
  } else {
    lookupMeal1 = 'Lunch';
    lookupMeal2 = 'Breakfast';
    lookupMealIndex1 = (Object.keys(masterMealLog).indexOf(mealLogDateKey)) - 1;
    lookupMealIndex2 = lookupMealIndex1;
  }
  lookupMealDate1 = Object.keys(masterMealLog)[lookupMealIndex1];
  lookupMealDate2 = Object.keys(masterMealLog)[lookupMealIndex2];
  return [lookupMealDate1, lookupMeal1, masterMealLog[lookupMealDate1][lookupMeal1], lookupMealDate2, lookupMeal2, masterMealLog[lookupMealDate2][lookupMeal2]];
}
