# shopping-list-ui

- Should use `React` & `NextJS`
- Should run on port 3001
- Should send a valid API Key for all API Requests
- Should create "shopping-list" page
  * Should fetch shopping list items from the shopping-list-api via `axios`
  * Should display list of shopping list items
  * Should have a "Remove" button, when clicked, should remove item from list and refreshes the 
  * Should have a "Edit" button, when clicked, should take me to the "update-shopping-list-item" page
  * Should have an "Add" button, when clicked, should take me to the "add-shopping-list-item" page
- Should create "add-shopping-list-item" page
	- Should create a shopping list item using the shopping-list-api via `axios`
	- Should display an error when a non 400 series status code comes back
- Should create "add-shopping-list-item" page
	- Should create a shopping list item using the shopping-list-api via `axios`
	- Should display an error when a 400 series status code comes back
	- Should take me to the "shopping-list" page when it completes successfully
- Should create "update-shopping-list-item" page
	- Should update a shopping list item using the shopping-list-api via `axios`
	- Should display an error when a 400 series status code comes back
	- Should take me to the "shopping-list" page when it completes successfully
