# Group-repo-API
Group project about making an API with encryption, making AJAX requests from another website in this case a [book library](https://github.com/Jonathannilsson90/Group-repo-AJAX-site).
<br>
<br>
We decided to host the API on railway.app to ease access for everyone involved in the project and to easier present out project to the class. <br>
As well as to learn more about webhosting.

---


## NPM packages used in this project: 


---


```
 npm install express 
 npm install dotenv
 npm install mongoose
 npm install nodemon
 npm install cors
 npm install helmet
 npm install jsonwebtoken
 ```


---


## How to get the API up and running:
Our project has a .gitignore so in order to get the server running following declarations is needed in a **.env**-file:
```
PORT = "Your port here"
DB_URL = "Your mongoDB URL here"
ACCESS_SECRET_TOKEN = "Your secret authorization-word-token here"
```

## How to start the server:
```
"npm start" for production - starting nodejs-script

"npm test" for development - starting nodemon-script
```
## HTTP verbs with endpoints:

**USERS**<br>
POST:   https://group-repo-api-production.up.railway.app/users/token <br>
POST:   https://group-repo-api-production.up.railway.app/users/register<br>
DELETE: https://group-repo-api-production.up.railway.app/users/register<br>
GET:    https://group-repo-api-production.up.railway.app/users/allUsers<br>

**BOOKS** <br>
POST:   https://group-repo-api-production.up.railway.app/books <br>
GET:    https://group-repo-api-production.up.railway.app/books <br>
DELETE: https://group-repo-api-production.up.railway.app/books/ ***id*** <br>
PATCH:  https://group-repo-api-production.up.railway.app/books/ ***id*** <br>


---


## Links:
## [Ajax request site](https://github.com/Jonathannilsson90/Group-repo-AJAX-site)
## [Railway.app site](https://group-repo-api-production.up.railway.app)


---


## Contributors:


|Name: |Github:    |
|-----------------|-----------| 
|Yulia Gutorova   |[yulia-gutorova](https://github.com/yulia-gutorova)           |
|Viktor Ceder     |[viktor472](https://github.com/viktor472)                    |
|Robin Raczkiewicz|[Robinrac](https://github.com/Robinrac)                      |           
|Jonathan Nilsson |[Jonathannilsson90](https://github.com/Jonathannilsson90/)   |           