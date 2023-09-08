# shopping-list-ui

- Should use ExpressJS
- Should include an Open API yaml file in the source tree, describing the AP
- Should listen on port 5000
- Should expose an `addShoppingListItem` endpoint
    * Should expose at POST /shopping-list-items
    * Should accept a request body that includes `name`, `price`, `quantity`
    * Should return a 200 and the newly created entity with an id when valid input provided
    * Should return a 400 and a `{"status": 400, "message": "Invalid input" }` response when any of the required fields are not provided
    * Should return 403 and a `{"status": 400, "message": "Invalid input" }` response when invalid, or no API key provided
- Should expose an `updateShoppingListItem` endpoint
    * Should expose at PUT /shopping-list-items/:id
    * Should accept a request body that includes `name`, `price`, `quantity`
    * Should return a 200 and the updated created entity with an id when valid input provided
    * Should return a 400 and a `{"status": 400, "message": "Invalid input" }` response when any of the required fields are not provided
    * Should return 403 and a `{"status": 400, "message": "Invalid input" }` response when invalid, or no API key provided
- Should expose a `removeShoppingListItem` endpoint
    * Should expose at DELETE /shopping-list-items/:id
    * Should accept a request body that includes name, price, quantity
    * Should return a 200 status code, no response when the delete succeeds
    * Should return 403 and a `{"status": 400, "message": "Invalid input" }` response when invalid, or no API key provided
- Should expose a `listShoppingListItems` endpoint
    * Should expose at GET /shopping-list-items endpoint
    * Should return a 200 status code, and the list of shopping list items
    * Should return 403 and a `{"status": 400, "message": "Invalid input" }` response when invalid, or no API key provided
