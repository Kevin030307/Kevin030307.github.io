// Define the display method to print a table row
function displayGame() {
    var title_cell = "<td>" + this.title + "</td>";
    var genre_cell = "<td>" + this.genre + "</td>";
    var year_cell = "<td>" + this.year + "</td>";
    var rating_cell = "<td>" + this.rating + "</td>";
    var dev_cell = "<td>" + this.developer + "</td>";

    var row = "<tr>" + title_cell + genre_cell + year_cell + rating_cell + dev_cell + "</tr>";
    document.write(row);
}

// Define the Constructor function
function HaloGame(title, genre, year, rating, developer) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
    this.developer = developer;
    // Assign method to the object
    this.display = displayGame;
}

// Create an array of 5 Halo objects for Xbox One
var haloArray = [
    new HaloGame("Halo: The Master Chief Collection", "FPS", 2014, "M", "343 Industries"),
    new HaloGame("Halo 5: Guardians", "FPS", 2015, "T", "343 Industries"),
    new HaloGame("Halo Wars 2", "RTS", 2017, "T", "Creative Assembly"),
    new HaloGame("Halo Infinite", "FPS", 2021, "T", "343 Industries"),
    new HaloGame("Halo: Spartan Assault", "Top-down Shooter", 2013, "T", "Vanguard Games")
];

// Loop through the array and call the display method for each
for (var i = 0; i < haloArray.length; i++) {
    haloArray[i].display();
}