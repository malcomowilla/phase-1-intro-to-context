// Your code here

const newEmp = ["Gray", "Worm", "Security", 1]

function createEmployeeRecord(newEmp){
const employeeRecord={
    'firstName':`${newEmp[0]}`,
    'familyName':`${newEmp[1]}`,
    'title': `${newEmp[2]}`,
    'payPerHour':newEmp[3],
    'timeInEvents':[],
    'timeOutEvents':[]
}
return employeeRecord
}

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]]

function createEmployeeRecords(twoRows){
    let employeeRecords=[]
   twoRows.forEach(element => {
   employeeRecords.push(createEmployeeRecord(element))
   });
   return employeeRecords
}



function createTimeInEvent(newRecord=createEmployeeRecord(newEmp),timeInStamp='2014-02-28 1400'){
  const timeInArray=timeInStamp.split(' ')
const newEvent={
    date:`${timeInArray[0]}`,
    hour:timeInArray[1]
  }
  newRecord.timeInEvents.push(newEvent)
  console.log(newRecord)
}


createEmployeeRecord(newEmp)
createEmployeeRecords(twoRows)
createTimeInEvent()