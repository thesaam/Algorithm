// Task 1

function convertFahrToCelsius(Temp) {

  let fTemp = Temp;
  let fToCel = (fTemp - 32) * 5/9;
  let finalFToCel = fToCel.toFixed(4);
  
  if ((isNaN(fTemp) === true) && (Array.isArray(fTemp)) !== true ) {
    let stringFtemp = JSON.stringify(fTemp);
    console.log(`${stringFtemp} is not a valid number but a/an ` + typeof fTemp);
    
    return `${stringFtemp} is not a valid number but a/an ` + typeof fTemp
  }

  if ((isNaN(fTemp) === false) && (/^ *$/.test(fTemp)) == false && ((typeof fTemp !== 'boolean'))) {
    console.log(finalFToCel); 
    return finalFToCel;
  } 

if (/^ *$/.test(fTemp) && (fTemp == [])) {
  console.log(`${fTemp} is not a valid number but a/an ` + typeof fTemp); 
  return `${fTemp} is not a valid number but a/an ` + typeof fTemp
}

if ((typeof fTemp === 'boolean')) {
  console.log(`${fTemp} is not a valid number but a/an ` + typeof fTemp); 
  return `${fTemp} is not a valid number but a/an ` + typeof fTemp
}

if ((Array.isArray(fTemp)) === true) {
  let ArrayOfFTemp = JSON.stringify(fTemp);
  console.log( `${ArrayOfFTemp} is not a valid number but an Array `); 
  return `${ArrayOfFTemp} is not a valid number but an Array `
}

return finalFToCel;

}

convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius("");
convertFahrToCelsius({});
convertFahrToCelsius(true);
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});


// Task 2

function checkYuGiOh(n) {
  numbersArray = [];
    for (let i = 1; i <= n; i++) {
        numbersArray.push(i)
      }
      
  
      newArray = [];
      numbersArray.map(num => {
        if ((num % 2 === 0) && (num % 3 !== 0) && (num % 5 !== 0)) {
          newArray.push(num)
        }
      });

      newArray1 = [];
      numbersArray.map(num => {
        if ((num % 3 === 0) && (num % 2 !== 0) && (num % 5 !== 0)) {
          newArray1.push(num)
        }
      });

      newArray2 = [];
      numbersArray.map(num => {
        if ((num % 5 === 0) && (num % 2 !== 0) && (num % 3 !== 0)) {
          newArray2.push(num)
        }
      });

      newArray3 = [];
      numbersArray.map(num => {
        if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 !== 0)) {
          newArray3.push(num)
        }
      });

      newArray4 = [];
      numbersArray.map(num => {
        if ((num % 2 === 0) && (num % 5 === 0) && (num % 3 !== 0)) {
          newArray4.push(num)
        }
      });

      newArray5 = [];
      numbersArray.map(num => {
        if ((num % 3 === 0) && (num % 5 === 0) && (num % 2 !== 0)) {
          newArray5.push(num)
        }
      });

      newArray6 = [];
      numbersArray.map(num => {
        if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) {
          newArray6.push(num)
        }
      });

      for (const item of newArray) {
        if (numbersArray.includes(newArray[newArray.indexOf(item)])) {
          position = numbersArray.indexOf(item);
          numbersArray.splice(position, 1,'yu');
        }
      }

      for (const item1 of newArray1) {
        if (numbersArray.includes(newArray1[newArray1.indexOf(item1)])) {
          position1 = numbersArray.indexOf(item1);
          numbersArray.splice(position1, 1,'gi');
        }
      }

      for (const item2 of newArray2) {
        if (numbersArray.includes(newArray2[newArray2.indexOf(item2)])) {
          position2 = numbersArray.indexOf(item2);
          numbersArray.splice(position2, 1,'oh');
        }
      }

      for (const item3 of newArray3) {
        if (numbersArray.includes(newArray3[newArray3.indexOf(item3)])) {
          position3 = numbersArray.indexOf(item3);
          numbersArray.splice(position3, 1,'yu-gi');
        }
      }

      for (const item4 of newArray4) {
        if (numbersArray.includes(newArray4[newArray4.indexOf(item4)])) {
          position4 = numbersArray.indexOf(item4);
          numbersArray.splice(position4, 1,'yu-oh');
        }
      }

      for (const item5 of newArray5) {
        if (numbersArray.includes(newArray5[newArray5.indexOf(item5)])) {
          position5 = numbersArray.indexOf(item5);
          numbersArray.splice(position5, 1,'gi-oh');
        }
      }

      for (const item6 of newArray6) {
        if (numbersArray.includes(newArray6[newArray6.indexOf(item6)])) {
          position6 = numbersArray.indexOf(item6);
          numbersArray.splice(position6, 1,'yu-gi-oh');
        }
      }

      if ((isNaN(n) === true) && (Array.isArray(n)) !== true) {
        let value = JSON.stringify(n);
        console.log(`invalid parameter: ${value}`); 
        return `invalid parameter: ${value}`;
    }

      if ((isNaN(n) === false) && (/^ *$/.test(n)) == false  && ((typeof(n) !== 'boolean'))) {
          console.log(numbersArray); 
          return numbersArray;
      }

      if ((typeof(n) === 'boolean') ) {
          console.log(`invalid parameter: ${n}`);
          return `invalid parameter: ${n}`;
      }

      if (/^ *$/.test(n) && (n == [])) {
          console.log(`invalid parameter: ${n}`);
          return `invalid parameter: ${n}`;
      }

      if ((Array.isArray(n)) === true) {
          let value = JSON.stringify(n);
          console.log(`invalid parameter: ${value}`); 
          return `invalid parameter: ${value}`;
      }

  console.log(numbersArray);
  return numbersArray;

}

      checkYuGiOh(30);
      checkYuGiOh(true);
      checkYuGiOh("10");
      checkYuGiOh("Fizz Buzz is meh");

  



