// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



// This function will calculate 1 employee's bonus
  // your logic here
  // run through the objects, take in one employeee object and return a new one with the following
  // name, bonus percentage, total compensation (base anual + bonus), and total bonus
  // individual bonus rules: rating 2 or below = no bonus; 3 = 4% of base; 4 = 6% of base; 5 = 10% of base
    // OBJECTIVE 1 ^^^

  // if employee number is 4 digits long = additional 5%
  // if annual is > 65k = bonus adjusted -1%
  // no bonus below 0% or above 13%
  

  // Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

  // * The `name` property should contain the employee's name.
  // * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
  // * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
  // * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

let employee = employees.name;


  
function calculateIndividualEmployeeBonus(employee) {  
    // your logic here
  let bonusPercentage = 0;
    for (let i=0; i < employees.length; i++) {
      if (employees[i].reviewRating <= 2) {
         employees.bonusPercentage + 0
        }
      if (employees[i].reviewRating = 3) {
         employees.bonusPercentage + .04
        }
      if (employees[i].reviewRating = 4) {
         employees.bonusPercentage + .06
        }
      if (employees[i].reviewRating = 5) {
         employees.bonusPercentage + .1
        }
    }
  return bonusPercentage
    // return new object with bonus results
  
  }
  console.log(calculateIndividualEmployeeBonus('Jem'));