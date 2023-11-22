//1)class-movie
/*a)Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
and a String representing the rating as its arguments, and sets the respective class properties to these values.*/
class movie{
    constructor (title,studio,rating){
        this.title = title;
        this.studio = studio ;
        this.rating = rating;
    } 
}
 const  mymovie = new movie("The Shawshank Redemption","Castle Rock Entertainment","9.3");

console.log(mymovie.title);
console.log(mymovie.studio);
console.log(mymovie.rating);
/*b)The constructor for the class Movie
will set the class property rating to "PG" as default when no rating is provided.*/
class mimovie{
    constructor(title,studio,rating = "pg"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const moviewtaring = new mimovie("The Shawshank Redemption","Castle Rock Entertainment");
console.log(moviewtaring.title);
console.log(moviewtaring.studio);
console.log(moviewtaring.rating);

const movierating = new movie("The Shawshank Redemption","Castle Rock Entertainment","3");
console.log(movierating.title);
console.log(movierating.studio);
console.log(movierating.rating);

/*c) Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.*/
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
function getRating(movies){
    return movies.filter(movie => movie.rating === 4);
}
const moviesArray = [
   new movie('AyirathilOruvan','Dream Valley Corporation',4),
   new movie('thuppaki','v.creations',4),
   new movie('kuruvi','Red Giant Movies',2),
   new movie('jilla','super good films',3)
]
let ratedMovies = getRating(moviesArray);
console.log(ratedMovies);

/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/
class basemovie{
    constructor(title,production,rating){
        this.title = title;
        this.production = production;
        this.rating = rating;
    }
}
var mibasemovie = new basemovie("Casino Royale"  , "Eon Productions" , "PG­-13");
console.log(mibasemovie.title);
console.log(mibasemovie.production);
console.log(mibasemovie.rating);


//2)class-circle
class Circle{
    constructor(radius,color){
        this._radius = radius;
        this._color = color;
    }
    get color(){
        return `The color of the circle is ${this._color}`;
    }
    get radius(){
        return `the radius of the circle ${this._radius}`;
    }
    get area(){
        var area = Math.PI *Math.pow(this._radius,2);
            return `The area of the circle is ${area.toFixed(2)}`;
        }
    get circumference(){
        var circum = 2 * Math.PI * this._radius;
       
            return `The circumference of the circle is ${circum.toFixed(2)}`;
        }
    }
    var myCircle = new Circle(1,"red");
    console.log(myCircle.color);
    console.log(myCircle.radius);
    console.log(myCircle.area);
    console.log(myCircle.circumference);








/*3)Write a “person” class to hold all the details.*/
class person{
    constructor(name,age,dob,nationality,address,){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.nationality = nationality;
        this.address = address;
    }
}
var person1 = new person("sudhan","24","03/06/1999","indian","thozilpettai,karur,639904",);
console.log(person1.name);
console.log(person1.age);
console.log(person1.dob);
console.log(person1.nationality);
console.log(person1.address);


/*4)write a class to calculate the uber price.*/
class uber{
    constructor(basefare,costperkilometer){
        this.basefare = basefare;
        this.costperkilometer = costperkilometer;
    }
    cal(distance){
        if(distance < 0){
            return "Distance can not be Negative"
        }
        const fare = this.basefare + this.costperkilometer*distance;
        return `The uber price for the ${distance} kilometer is $${fare.toFixed(2)}`;
    }
}
var myuber = new uber(5, 3);
const distancetravelled = 20;
console.log(myuber.cal(distancetravelled));




