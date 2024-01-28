// MOVIE RENTAL API

const customer1 = new Customer('John Doe');
const movie1 = new Movie('The Matrix', 3);
const movie2 = new Movie('Inception', 2);


class Movie {
    constructor(title, stock) {
        this.title = title;
        this.stock = stock;
    }

    rent(customer) {
        if (this.stock > 0) {
            this.stock--;
            customer.rentMovie(this);
            console.log(`${customer.name} has rented "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is out of stock.`);
        }
    }

    returnMovie(customer) {
        this.stock++;
        customer.returnMovie(this);
        console.log(`${customer.name} has returned "${this.title}".`);
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.rentedMovies = [];
    }

    rentMovie(movie) {
        this.rentedMovies.push(movie);
    }
    
    returnMovie(movie) {
        this.rentedMovies = this.rentedMovies.filter(m => m !== movie);
    }

    listRentedMovies() {
        return this.rentedMovies.map(movie => movie.title).join(", ");
    }
}


customer1.rentMovie(movie1); 
customer1.rentMovie(movie2); 

console.log(customer1.listRentedMovies());

movie1.returnMovie(customer1); 
console.log(customer1.listRentedMovies()); 