# Netflix GPT

create react app
configured tailwind css
Header
Routing
Login form
Signup Form
Form Validation
useRef hook
Firebase setup
Deployed the app to production
Create a signup user account
Implement signin user api
Created Redux store with user slice
Implemented Signout
updated our profile
Redirected the app
Bug Fix: Signup user display name and profile picture update
Bug Fix: If the user is not logged in, redirect the user to login page and vice-versa
Unsubscribed the onAuthStateChnage callback once the component unmounts
Add hardcoded values to the constant files.
Registered for TMDB API and create an access Token
Get data from TMDB now playing API list.
custom hooks for nowPlayingMovies
Updated the store with the data
Planning for Main and secondary container
Fetch data for trailer video
custom hook for trailervideo and update the store
Embedded the youtube video and made it autoplay and mute
Added Tailwind classes 
Build Secondary Component

## Browse Sections

- Main Video Section - Main Container
  - Video Background
  - Video Title
- Secondary Container
  - Movies list * N
    - Popular
      - MovieCards * N
    - Trending
    - Now Playing
    - Genres
  - Cards * N
  - 



# Features

- Login/Signup page
  - Signin/signup form
  - Redirects to browse page
- Browse (happens after authentication)
  - Header
    - Main Movie
      - Trailer in the background
      - Title and description
      - Movie Suggestions
        - Movie List \* N
- Netflix GPT
  - Search bar
  - Movie Suggestions

# Setting up a Router

- install packages
  - npm i -d react-router-dom
  - npm i react-router
  - createBrowserRouter([
    {
    path:'',
    element:''
     }
    ])
  - <RouterProvider router=appRouter>

# Validations in React Form

- It is always important to use a library while doing the validations in React Forms like **Formik**

# Hooks

## useRef
- useRef is a hook lets u reference a value that is not needed for rendering

## useDispatch
- given by react-redux to dispatch an action

## useNavigate
- given by react-router-dom to navigate to a particular page.

## useSelector
- To get the data from the store given by react-redux

# Setting up a Redux Store

- Install the libraries
  - npm i -d @reduxjs/toolkit
  - npm i react-redux
  - Add a store in utility called appStore.js with a reducer
  - create a slice to store all the users called userSlice.js - 
  - const userSlice=createSlice({
        name:'user',
        initialState : null,
        reducers: {
            addUser:(state, action)=>{
            return action.payload;
            },
            removeUser:(state, action)=>{
            return null
            }
        }        
    })
  -  export the reducer and actions from userSlice and import to the store.

# Notes

- Usually, whenever we click a button in the form, it submits.
- In order to prevent this behavior, we do e.preventDefault() because we do not want to submit the form just as now.

- Instead of calling auth again and again. Call it once in the central place eg. in firebase.js

- onAuthStateChange is fired whenever userSignsIn, signsupm and is usually called at applevel or in the body.

- When we try to update the details of a user, we do not give the details of the user but we give the details of the user from the auth.
  
- We have to give options as a parameter whenever we make an API call

- API data is returned twice in the console in the development mode because of React.StrictMode. 
  - React is trying to do extra rendering of your components to check for inconsistencies between your calls. 
  - It happens only in the development mode and will throw an error if there are any inconsistencies in the code.

- Fix the aspect ratio of videos
  - aspect-video
  - all the videos have aspect ratio 16:9