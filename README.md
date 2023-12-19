# A REST CRUD api

**Install ThunderClient:**
If you haven't already, install the ThunderClient extension in Visual Studio Code. You can download it from the Visual Studio Code Marketplace.

**Create a Workspace:**
Open your API workspace in Visual Studio Code.

**Create Requests:**
In ThunderClient, you can create separate requests for each API endpoint (e.g., POST, GET, PUT, DELETE). To create a request:

## Click on the ThunderClient icon in the sidebar.
Click the "New Request" button or right-click on a folder and select "New Request."
Give your request a name and choose the HTTP method (e.g., POST, GET) from the dropdown menu.
Configure Requests:
In each request, configure the following:

URL: Set the URL for the API endpoint you want to test (e.g., https://task-twoo.onrender.com/api/).
HTTP Method: Choose the appropriate method (e.g., POST, GET) for the request.
Headers: If your API requires specific headers, you can add them here.
Send Requests:

Click the "Send Request" button to send the request to your API.
ThunderClient will display the response, including status codes, headers, and response body.
Test Different Scenarios:

Modify the request parameters, headers, and request body as needed to test various scenarios, including different data inputs and error handling.

Base URL: https://task-twoo.onrender.com/api/

## Endpoints
__Create a New Record__
URL: /

Method: POST

Description: Create a new record in the database.




## Task-Two API Documentation
Base URL: https://task-twoo.onrender.com/api/

Endpoints
Create a New Record
URL: /

Method: POST

Description: Create a new record in the database.

Request Body:

json
Copy code
{
  "name": "John",
  "user_id": 123
}
Response:

Status: 201 Created

Body:

json
Copy code
{
  "_id": "65030cc4872c146ce9491198",
  "name": "John",
  "user_id": 123
}
Read Records
URL: /

Method: GET

Description: Retrieve all records or filter by name.

Parameters:

name (optional): Filter records by name.

Update a Record
URL: /:id

Method: PUT

Description: Update a record by its ID.

Parameters:

id (required): The ID of the record to update.

Delete a Record
URL: /:id

Method: DELETE

Description: Delete a record by its ID.

Parameters:

id (required): The ID of the record to delete.
