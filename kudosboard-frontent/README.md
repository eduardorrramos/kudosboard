# Unit Assignment: Kudos Board

## Submitted by: Eduardo Ramos

Deployed Application (optional): [Kudos Board Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [X] **Home Page**
  - [X] Displays header, banner, search, board grid, and footer.
  - [X] Displays preview of all boards on initial page load.
    - [X] Boards previews should show an image/gif and board title.
  - [X] Users can click on a category (recent, celebration, thank you, inspiration) to filter the boards.
    - [X] Recent displays most recently created boards.
    - [X] Other categories display boards of that type.
  - [X] Users can search for a board by name.
  - [X] Users can click on a board to navigate to a new page containing that board.
  - [X] Users can create a new board.
    - [X] Boards should have a title, category, and author (optional).
  - [X] User can delete boards.
  
- [X] **Board Page**
  - [X] Displays a list of all cards for a board.
    -  [X] Each card features a text message.
    -  [X] Each card features a gif found using the [GIPHY API](https://developers.giphy.com/docs/api/).
    -  [X] Users can optionally sign the card as the author.  
-   [X] Cards can be upvoted.
-   [X] Cards can be deleted.


#### STRETCH FEATURES


- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ]  Boards and cards should be associated with a user.
    - [ ]  Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.
- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users should be able to comment on cards.

### Walkthrough Video

'https://www.loom.com/share/5ed56090ea104ecc81e9ebc2d346e3b5?sid=16d2d6e5-d1ff-42bc-aaf2-af5873c449c6'.


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I believe that our labs were a great help for my ability to grasp the interaction between front-end and back-end. In exploring each of the topics in depth separately I was able to understand how to piece them together in my own project. I will say that some methods in the Codepath course were outdated and libraries no longer available. This made it harder for me to follow along, as some feedback. To mitigate this I did my own outside research as far as React methods and Prisma queries.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Given more time I would have spent more time on the back-end of this application, this was definitely my biggest area of learning considering I had never worked with a full-stack application until this project. Learning how to create, test, and fetch from a database has been a rollercoaster of learning but something invaluable and that I hope to continue exploring in the future. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Our project demos were moved to Monday, I look forward to showing this project to my peers then. I have seen some of my peers be successful in setting up user authentification, and I wish I had more time to tackle that. This is an interesting topic in regards to user privacy and one that raises questions of data security.

### Open-source libraries used

- N/A

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
