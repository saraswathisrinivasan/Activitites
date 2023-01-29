class Circle
{
    constructor()
    {
        this.radius=radius
        this.color=color
    }
    constructor(radius)
    {
        this.radius=radius
    }
    constructor(radius,color)
    {
        this.radius=radius
        this.color=color
    }
    getRadius()
    {
        return this.radius
    }
    setRadius(radius)
    {
        this.radius=radius
    }
    getColor()
    {
        return this.color
    }
    setColor(color)
    {
        this.color=color
    }
    toString()
    {
        return("Circle[radius=",this.radius,",color=",this.color,"]")
    }
    getArea()
    {
        return(Math.PI*this.radius*this.radius)
    }
    getCircumference()
    {
        return(2*Math.PI*this.radius)
    }
}

