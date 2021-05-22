function convertFahrToCelsius(Temp) {

  let fTemp = Temp;
  let fToCel = (fTemp - 32) * 5/9;
  let finalFToCel = fToCel.toFixed(4);
  
  if((isNaN(fTemp) === true) && (Array.isArray(fTemp)) !==true ) {
    let stringFtemp = JSON.stringify(fTemp);
    console.log(`${stringFtemp} is not a valid number but a/an` + typeof fTemp);
    
    return `${stringFtemp} is not a valid number but a/an` + typeof fTemp
  }

  if ((isNaN(fTemp) === false) && (/^ *$/.test(fTemp)) == false && ((fTemp !== 'boolean'))) {
    console.log(fToCel); 
    return fToCel;
} 

if (/^ *$/.test(fTemp) && (fTemp == [])) {
  console.log(`${fTemp} is not a valid number but a/an` + typeof fTemp); 
  return `${fTemp} is not a valid number but a/an` + typeof fTemp
}

if ((fTemp === 'boolean') ) {
  console.log(`${fTemp} is not a valid number but a/an` + typeof fTemp); 
  return `${fTemp} is not a valid number but a/an` + typeof fTemp
}

if ((Array.isArray(fTemp)) === true) {
  let ArrayOffTemp = JSON.stringify(fTemp);
  console.log( `${ArrayOffTemp} is not a valid number but an Array`); 
  return `${ArrayOffTemp} is not a valid number but an Array`
}

return finalFToCel;

}

convertFahrToCelsius(true);
convertFahrToCelsius('0');
convertFahrToCelsius("");
convertFahrToCelsius({});
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});


// Task 2

function checkYuGiOh(n) {
  numbersArray = [];
    for (let i = 1; i <= n; i++)
    {
        numbersArray.push(i)
        console.log(i);
      }
      console.log(numbersArray);
  
      newArray = [];
      numbersArray.map(item => {
        if (item % 2 === 0) {
          newArray.push(item)
        }
      });
      console.log(newArray)

      newArray1 = [];
      numbersArray.map(item1 => {
        if (item1 % 3 === 0) {
          newArray1.push(item1)
        }
      });
      console.log(newArray1)

      newArray2 = [];
      numbersArray.map(item2 => {
        if (item2 % 5 === 0) {
          newArray2.push(item2)
        }
      });
      console.log(newArray2)

      newArray3 = [];
      numbersArray.map(item3 => {
        if ((item3 % 2 === 0) && (item3 % 3 === 0)) {
          newArray3.push(item3)
        }
      });
      console.log(newArray3)

      newArray4 = [];
      numbersArray.map(item4 => {
        if ((item4 % 3 === 0) && (item4 % 5 === 0)) {
          newArray4.push(item4)
        }
      });
      console.log(newArray4)

      newArray5 = [];
      numbersArray.map(item5 => {
        if ((item5 % 2 === 0) && (item5 % 3 === 0) && (item5 % 5 === 0)) {
          newArray2.push(item5)
        }
      });
      console.log(newArray5)
    }

      checkYuGiOh(30)
  



