// Your code here
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
//console.log(createEmployeeRecord(['nyi','htet','student']))

function createEmployeeRecords(arrOfArrays){
    return arrOfArrays.map(arr=>createEmployeeRecord(arr))
}