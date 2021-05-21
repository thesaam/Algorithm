function convertFahrToCelsius(Temp) {

  const fTemp = Temp;
  const fToCel = (fTemp - 32) * 5/9;
  const message = `${fTemp}F is ${fToCel}C.`;

    console.log(message);

  if(typeof fTemp === 'number' || typeof fTemp === Number('string')) {
    console.log(`${fTemp} is valid`)
  } 
  else {
    console.log(`${fTemp} is not a valid number but a/an ` + typeof fTemp);
  }
}

convertFahrToCelsius ('10')


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
        if (item2 % 3 === 0) {
          newArray2.push(item2)
        }
      });
     
      console.log(newArray2)
    }

      checkYuGiOh(30)
  



