# managing-books-Node.js-Backend-Developer-Challenge

**--HOW TO RUN PROJECT LOCALLY--**

**1) Initialize Git:**

      git init

**2) Clone the project from the given url:**

      git clone https://github.com/kartguy/managing-books-Node.js-Backend-Developer-Challenge.git

**3) cd to the folder:**

      cd .\managing-books-Node.js-Backend-Developer-Challenge\
   
**4) Install all dependencies:**

      npm install

**5) First in the .env file change the value of PORT to an unoccupied port. By default its running at 3000.**
            
      PORT=YOUR_PORT

**6) Start the project:**
   
      npm start

**7) USE POSTMAN TO FETCH ALL APIs**



**NOTE: I'M USING MONGODB ATLAS SO THE URL OF MY DATABASE IS IN THE .ENV FILE AND I'VE NOT INCLUDED IT IN THE .gitignore FILE**

         *                              *  
         
         
         
                        *
         
         
         
         *                              *


**--API END POINTS AND THEIR USAGE--**

**1) Add a new book (title, author, summary)**

            Make a POST request on: http://localhost:3000/api/books
            
            In the body tag pass raw json data.
            
            Example:
            
            {
             "book_title":"Power of Habit",
             "book_author":"Charles Duhigg",
             "book_summary":"The habit loop"
            }
   
   
**2) View a list of all books**

      Make a GET request on: http://localhost:3000/api/books

   
**3) View details of a specific book by its ID**

      Make a GET request mentioning a valid id: http://localhost:3000/api/books/6540f0cb494cb081bbd14651
      
   
**4) Update a book's details**

      Make a PATCH request atleat mentioning one parameter to update(along with the id) : http://localhost:3000/api/books/6540eff9494cb081bbd14649

      In the body tag pass raw json data.
        
        Example:
        
        {
         "book_title":"atleast",
         "book_author":"one",
         "book_summary":"parameter"
        }
   
**5) Delete a book**

      Make a DELETE request mentioning the id on: http://localhost:3000/api/books/6540f2384551b7217f43c4ae
