function Movie(title, year, category, budget) {
  this.title = title;
  this.year = year;
  this.category = category;
  this.budget = budget;

  this.eurBudget = function () {
    return this.budget * 1.1;
  };
}

let movie1 = new Movie("Titanic", 2005, "drama", 3000000);

console.log(movie1.budget, movie1.eurBudget(), movie1.category);
