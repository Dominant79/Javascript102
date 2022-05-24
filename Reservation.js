// Satr.codes Javascript 102 project
// Author: 'Abdulrahim'

class Vehicle{
    constructor(name, company, ID){
        this.name = name
        this.company = company
        this.ID = ID
    }
}
class Car extends Vehicle{
    constructor(name, company, ID, Ctype){
        super(name, company, ID)
        this.Ctype = Ctype
    }
}
class Airplane extends Vehicle{
    constructor(name, company, ID, APtype){
        super(name, company, ID)
        this.APtype = APtype
    }
}



class Employee{
    constructor(name, dateOfBirth, ID){
        this.name = name
        this.dateOfBirth = dateOfBirth
        this.ID = ID
    }
}
class Driver extends Employee{
    constructor(name, dateOfBirth, ID, licenseID){
        super(name, dateOfBirth, ID)
        this.licenseID = licenseID
    }
}
class Pilot extends Employee{
    constructor(name, dateOfBirth, ID, licenseID){
        super(name, dateOfBirth, ID)
        this.licenseID = licenseID
    }
}



class Reserved{
    constructor(reservationID, reservationDate, employeeId, vehiclesId){
        this.reservationID = reservationID;
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
    }
}

const Car1 = new Car("Yaris", "Toyota", "Car1", "gas");
const Car2 = new Car("K5", "KIA", "Car2", "gas");
const Car3 = new Car("BMW X6", "BMW", "Car3", "gas");
const Airplane1 = new Airplane("F16", "Fighting Falcon", "Airplane1", "gas");
const Airplane2 = new Airplane("Mig-35", "Russian", "Airplane2", "gas");

const Driver1 = new Driver('Abdulrahim', '01/11/2001', 'Driver1', '997')
const Driver2 = new Driver('Tareq', '19/09/1994', 'Driver2', '998')
const Driver3 = new Driver('Abdulrahim', '21/04/1984', 'Driver3', '999')
const Pilot1 = new Pilot('Mohammed', '17/07/1943', 'Pilot1', '112')
const Pilot2 = new Pilot('Waleed', '03/10/1987', 'Pilot2', '113')



const Reservation = [];
function check(employeeId, vehicleId, reservationId, name){
    if (vehicleId.includes('Car') && employeeId.includes('Driver') || vehicleId.includes('Airplane') && employeeId.includes('Pilot') ){
        const d = new Date();
        const m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const month = m[d.getMonth()]
        const dNow = d.getDate() + ' ' + month + ' ' + d.getFullYear()
        const RSVR = new Reserved(`Reservation ${[reservationId]}`, dNow, employeeId, vehicleId);
        Reservation.push(RSVR);
        return `Checking for '${vehicleId} with '${employeeId}' ...
        ========= Checking Verified =========\n `;
            
    }
    else{
        return `Checking for '${vehicleId}' with '${employeeId}'
        it looks like The '${vehicleId}' does not match with '${employeeId}'\n`;
    }
}

console.log(check(Driver1.ID, Airplane1.ID, 0001));
console.log(check(Driver2.ID, Car2.ID, 0002));
console.log(check(Driver3.ID, Car3.ID, 0003));
console.log(check(Pilot1.ID, Car1.ID, 0004));
console.log(check(Pilot2.ID, Airplane1.ID, 0005));

const printRSVR = Reservation.map(function(print){
    console.log(print)
})


