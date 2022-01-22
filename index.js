/* Your Code Here */

let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (array) {
    return array.map(createEmployeeRecord)
}

let createTimeInEvent = function(ds) {
    let [date, hour] = ds.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour,10)
    })
    return this
}

let createTimeOutEvent = function (ds) {
    let [date, hour] = ds.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour,10)
    })
    return this
}

let hoursWorkedOnDate = function(ds) {
    let timeIn = this.timeInEvents.find(x => x.date === ds)
    let timeOut = this.timeOutEvents.find(x => x.date === ds)
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let calculatePayroll = function(er){
    return er.reduce(function(memo, i){
        return memo + allWagesFor.call(i)
    }, 0)
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(x => {return x.firstName === firstName})
}
 

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}