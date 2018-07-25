class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 );
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ];
let newSchedule = [];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
class Bonus {
 constructor (name, bonusPercentage, totalCompensation, totalBonus){
   this.name = name;
   this.bonusPercentage = bonusPercentage;
   this.totalCompensation = totalCompensation;
   this.totalBonus = totalBonus;
 }//end constructor
}//end Bonus

console.table( employees );
//create function that takes in one Employee object and returns new object with: name, bonus %, total compensation,total bonus.
function ratingBonus(employee) {
  if (employee.reviewRating < 3){
    return 0;
    } else if (employee.reviewRating === 3){
      return 4;
    } else if (employee.reviewRating === 4){
    return 6;
    } else if (employee.reviewRating === 5){
    return 10;
    }else{
    return 'error';
  }//end 'if' review sorting
}//end ratingBonus

function seniorityBonus(employee) {
  if (employee.employeeNumber.length === 4){
    return 5;
  }else{
    return 0;
  }//end if seniority sorting
}//end seniorityBonus

function baseSalaryAdjustment(employee) {
  if (Number(employee.annualSalary) >65000){
    return -1;
  } else {
    return 0;
  }//end 'if' base Salary sorting
} //end baseSalaryAdjustment

function percentCalc( employee) {
  let bonusPercent = ratingBonus(employee)+baseSalaryAdjustment(employee)+seniorityBonus(employee);
  if(bonusPercent > 13) {
    bonusPercent = 13;
  } else if (bonusPercent < 0){
    bonusPercent = 0;
  }
    return bonusPercent;
}// end percentCalc

function totalBonusCalc(employee) {
  if (percentCalc(employee)>0 ){
  return Math.round(employee.annualSalary/ percentCalc(employee));
} else{
  return 0;
  }
}//end totalBonusCalc

function totalCompensationCalc(employee) {
  return Math.round(Number(employee.annualSalary)+totalBonusCalc(employee));
}

function payStub(){

  for(let employee of employees) {
    let bonusPercentage=percentCalc(employee);
    let totalBonus=totalBonusCalc(employee);
    let totalCompenstion=totalCompensationCalc(employee);
    let emp = new Bonus (employee.name, bonusPercentage,totalCompenstion,totalBonus);
    console.log(emp);
    }
}
payStub();
