# Netflix GPT

create react app
configured tailwind css
Header
Login form
Signup Form

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
        - Movie List * N
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