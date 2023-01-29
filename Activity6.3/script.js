class Person
{
    constructor(name,age,dob,address,mobile)
    {
        this.name=name
        this.age=age
        this.dob=dob
        this.address=address
        this.mobile=mobile
    }
    getName()
    {
        return this.name
    }
    getAge()
    {
        return this.age
    }
    getDOB()
    {
        return this.dob
    }
    getAddress()
    {
        return this.address
    }
    getMobile()
    {
        return this.mobile
    }
    setName(name)
    {
        this.name=name
    }
    setAge(age)
    {
        this.age=age
    }
    setDOB(dob)
    {
        this.dob=dob
    }
    setAddress(address)
    {
        this.address=address
    }
    setMobile(mobile)
    {
        this.mobile=mobile
    }
}