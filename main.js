/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array,
// do it with a loop, printing each item you're 
// asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.

const students = [
    'Homer',
    'Fry',
    'Peter',
    'Jake',
    'Robin',
    'Rick',
    'Bart',
    'Morty',
    'Finn',
    'Shaggy',
    'Courage',
    'Johnny',
    'Arnold'
  ];
  let index = 0;
  
  while(index < students.length){
    console.log(students[index]);
    index++;
  }



  // Challenge 1 Code



  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, 
  // console.logging out each value. 64 should be 
  // printed first and 100 last.

  const grades = [100, 80, 110, 75, 83, 64];
  grades.reverse();
  index = 0;
  while(index < grades.length){
    console.log(grades[index]);
    index++;
  }
  //Challenge 2 Code

  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.

  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000] ;
  const evens = [];
  positiveNumbers.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    }
  });
  console.log(evens);

  /* how another student did it. 
  i = 0;

  while(i < positiveNumbers.length){
    if(positiveNumbers[i] % 2 == 0 ){
      console.log(positiveNumbers[i]);
    }
    i++;
  }
  */
  // Challenge 3 Code




  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array,
  // INCLUDING the negative ones. There should be four total printings.

  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
  const evens3 = [];
  const evens4 = [];
  mixedSignNumbers.forEach((num) => {
    if (num % 2 === 0) {
      evens3.push(num);
    } 
  });
  console.log(evens3);

  mixedSignNumbers.forEach((num) => {
    if (num % -2 === 0) {
      evens4.push(num);
    } 
  });
  console.log(evens4);

    
  // Challenge 4 Code



  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and 
  // one value from the end of the following array, 
  // simply by deleting them in the following line. 
  // Then console.log out each value individually.

  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  symmetricalCapitals.shift(); // this removes 'A' 
  symmetricalCapitals.shift(); // this removes 'H'
  symmetricalCapitals.pop(); //removes 'Y' because it is at the end

  index = 0;
  
  while(index < symmetricalCapitals.length){
    console.log(symmetricalCapitals[index]);
    index++;
  }
  // its going to loop through array now that everything was taken out.

  
  // Challenge 5 Code
    


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of 
  // the following array and two values (of your choice) 
  // to the end simply by adding them in the following line, 
  // and then console.log out each value individually.


  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  fibonacciNumbers.unshift(0);
  fibonacciNumbers.push(21,34);
  // can also push the 2 numbers seperately
  // like this fibonaciNumbers.push(21);
  //          fibonaciNumbers.push(34);

  index = 0;
  while(index < fibonacciNumbers.length){
    console.log(fibonacciNumbers[index]);
    index++;
  }

  
  // Challenge 6 Code
  
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, 
  // using the same syntax as the array creation from the 
  // previous 6 challenges; that is, every value should be placed
  // within the square brackets.  
  // Now console.log out each value individually.
  
  const blankArray = [];
  blankArray.push(2, 6, 12, 15, 17);
  index = 0;
  while(index < blankArray.length){
    console.log(blankArray[index]);
    index++;
  }
  
  
  // Challenge 7 Code





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five 
  // values of your choice using BOTH .push AND .unshift, 
  // and then console.log out each value individually.

  const emptyArray = [];

  emptyArray.push(12, 15, 17, 19, 23);
  emptyArray.unshift(4,7);
  index = 0;
  while(index < emptyArray.length){
    console.log(emptyArray[index]);
    index++;
  }
  // Challenge 8 Code




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, 
  // starting at index 3 and ending at index 10 (INCLUSIVE), 
  // logging out each value individually.


  index = 3; // makes sure that we start at index 3
  while(index < 11){ //indstead of students.length put array number your stopping at.
    console.log(students[index]);
    index++;
  }
  
  // Challenge 9 Code
  
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1,
  // making a COPY of the array , starting at index 3 
  // and ending at index 10 (INCLUSIVE). This is very similar to
  // string building; create a new array, loop through the old one, 
  // and put values from the original in the new one. 
  // Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  
  let copiedStudent = [];
  index = 3;
  while(index < 11){
      copiedStudent.push(students[index]);
    index++;
    console.log(copiedStudent);
  }
  console.log(copiedStudent);
 
 
  // Challenge 10 Code




  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*,
  // starting at index 3 and ending at index 10 (INCLUSIVE),
  // then log out each value of the copy individually. 
  // THEN log out each value of the original array. 
  // Notice that the original array didn't get any values taken 
  // out of it, because `slice` does NOT modify the original array.

  let secondStudents = students.slice(3,-2);
  console.log(secondStudents);
  index = 0;
   while(index < secondStudents.length){
    console.log(secondStudents[index]);
    console.log(index)
    index++;
  }
  
  
  
  // Challenge 11 Code
  



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the 
  // following array using .splice (NOT .slice!), 
  // then console.log out each item from the ORIGINAL array. 
  // Note that .splice DOES change the original array.

  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  
  let dinoSplice = dinosaurs.splice(4,3);
  i = 0;
  while(i < dinosaurs.length){
    console.log(dinosaurs[i]);
    i++;
  }
  
  
  
  // Challenge 12 Code

  
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from 
  // the above array into one string with a '*' string as the 
  // "separator". Then console.log out that string.
  
  let joinDino = dinosaurs.join(" * ");
  console.log(joinDino);
  
  
  
  
  
  // Challenge 13 Code



  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and
  // then log out the original array. 
  // .reverse DOES change the original array.

  dinosaurs.reverse();
  index = 0;
  while(index < dinosaurs.length){
    console.log(dinosaurs[index]);
    index++;
  }
  
  
  // Challenge 14 Code



  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays
  // into a NEW array you make (.concat RETURNS an array). 
  // Then console.log out each value of that new array individually. 
  // Now console.log both the primaries and secondaries arrays, 
  // noting that .concat does NOT mutate the original arrays.
  
  let rick = [2,4,6];
  let morty = ["summer", "jerry", "beth"];

  let gothruPortal = rick.concat(morty);
  console.log(gothruPortal);
  index = 0;
  while(index < gothruPortal.length){
    console.log(gothruPortal[index]);
    index++;
  }
  index = 0;
  while(index < rick.length){
    console.log(rick[index]);
    index++;
  }
  index = 0;
  while(index < morty.length){
    console.log(morty[index]);
    index++;
  }

  
  // Challenge 15 Code


  
