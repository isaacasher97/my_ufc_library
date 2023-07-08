# PROJECT 2

- **Project Name:** My UFC Library
- **Project By:** Isaac Asher
- [**LINK TO GITHUB**](https://github.com/isaacasher97/my_ufc_library)
- [**LINK TO DEPLOYED WEBSITE**](https://my-ufc-library.onrender.com/)
- **List of Technologies used:** HTML, JS, CSS, Node, Express, EJS, Mongo
- [**LINK TO TRELLO**](https://trello.com/b/LMJy9CG4/project-2)

## Description

As A User, I will initially be taken to a page with an option to login or signup. Once logged into my account, I can see my list of ufc fighters in my library of fighters. Users can also access each individual fighter that is in their library on a seperate page. 

Each fighter in a users library can be edited & updated. There will also be an option to add new fighters as well as delete current fighters. 

## Mock UP of UI

- Desktop & Mobile:

![Desktop View](https://i.imgur.com/YpzGmUP.png)

![Mobile View](https://i.imgur.com/TIO9B6E.png)

## List of Backend Endpoints

| ROUTE NAME | ENDPOINT | METHOD | PURPOSE |
|------------|----------|--------|---------|
| Index | /fighter | GET | Display list of all my ufc fighters |
| New | /fighter/new | GET | Displays a form to create a new fighter |
| Create | /fighter | POST |  Creates a New Fighter in my library |
| Show | /fighter/:id | GET | Display's one specific fighter's details |
| Edit | /fighter/:id/edit | GET | Displays a form relating to an existing fighter with input types that can be edited |
| Update | /fighter/:id | PUT | Updates a specific fighter in my library |
| Destroy | /fighter/:id | DELETE | Deltes a Specific Fighter in my library |
   
## ERD (ENTITY RELATIONSHIP DIAGRAM)

![PICTURE OF ERD](https://i.imgur.com/SCsZoDw.png)