Live Site: https://mighty-harbor-3519.herokuapp.com/#/

Specs:

1) When a user enters a movie title into the search box and clicks the search button, make an API call to search for movies using the user input.

2) Then, display all the search results on the same page. When a user clicks on specific search result, send them to another route which displays more detailed information about the specific movie. You'll need to make another type of OMDB API call.

3) Lastly, users can start a new search from any page. To sum up the two main routes:

Search/Home Page:

Input box for user to enter movie title.
When the user clicks the search button:
Search OMDb API for movies with the input text in the title.
Displays search results on the same page
Each movie in the search results has a link to a 'show' page

Show page:

Shows the results of a more detailed OMDb API search using the movie's ID.
Displays all the details of the specific movie, including the poster image of the movie.

Bonus:

A user can specify what type of data they are searching for: movie, series, or episode.
A user can check a box "Get Rotten Tomatoes Data" which will also fetch data from Rotten Tomatoes(using the OMDB API)
Create your own custom filter that filters out all films starring your least-favorite actor or in a genre you dislike, etc.
