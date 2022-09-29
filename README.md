# REACT APP with Foursquare API Integration / PLACES

First thing, is the landing page. There is a dropdown with filter search. There are three types of venues that have been implemented as in example written, bakery, coffe, and breakfast. When you select one, it will trigger that the refresh to send a request to the api and return 10 places that it has found. For each will have only the name. In order to get the address, and city, you have to click on the name, and the information, if it exist in Foursquare it will return what is has found from the query.

The project has all the three component in src folder. There are Nav for the search bar implemented with Downshift package, Venues all of the names of the query places it has found and Venue component that holdes information about each place. In the Venue component there is a condition to filter if there are any information about the address or the city. 
As for the venues there are hooked through a prop to send data to the child component, Venue through the click event, so whenever we click on a name of a place.

## Recommended IDE Setup - Runs with Vite

- npm run dev for hot reloading with Vite
