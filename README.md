#OWASP-Juice-shop-HW3
This project is a simple HTML and JavaScript–only website created as part of the OWASP Juice Shop HW3 assignment. It complements the earlier task of examining the OWASP Juice Shop to identify vulnerabilities on the website.
## Login.html
This is the main page for the app, which contains the code for the basic login form UI and links to script.js. There is also client-side verification by using the required HTML attribute.  
## Script.js
Handles all client-side behavior for the login page. It waits for the submit button to be pressed, then checks if the email contains "@", and the password is at least 8 characters long.
## Success.html
This HTML page was created to verify whether client-side validation was successfully bypassed in Part 3. If the form submission proceeds despite invalid input, the user is redirected from login.html to this page. Displaying this page confirms that the validation was bypassed and that the form was submitted without the intended JavaScript checks.
## How to Run
Clone the repo, then open login.html to access the site. Make sure that both files are in the same directory. 
