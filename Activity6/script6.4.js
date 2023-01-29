class UberCharge
{
   
    constructor(baseFare,costPerMint,timeInRide,costPerMile,rideDistance,bookingFee)
    {
        this.baseFare=baseFare
        this.costPerMint=costPerMint
        this.timeInRide=timeInRide
        this.costPerMile=costPerMile
        this.rideDistance=rideDistance
        this.bookingFee=bookingFee
    }
    getBaseFare()
    {
        return this.baseFare
    }
    getCostPerMint()
    {
        return this.costPerMint
    }
    getTimeInRide()
    {
        return this.timeInRide
    }
    getCostPerMile()
    {
        return this.costPerMile
    }
    getRideDistance()
    {
        return this.rideDistance
    }
    getBookingFee()
    {
        return this.bookingFee
    }
    calculateUberCharges()
    {
        return ("Your Charge = ",this.baseFare + (this.costPerMint * this.timeInRide) + (this.costPerMile * this.rideDistance) + this.bookingFee)
    }
}
const charge=new UberCharge(300,2,2,10,10,300)
console.log(charge.calculateUberCharges())