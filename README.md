This is an assessment I worked on for an interview.
At the time of this project, I had no knowledge of Ruby on Rails and PostgreSQL.
I gathered enough information to create this for the interview. <br/>
What I'd currently like to improve-- <br/>
-How I created the JSON in Rails. Mapping is effected by this as well on frontend.<br/>
-Pass children to another parent if a parent is deleted. <br/>
-Currently I have a random number generator set up to create the IDs because the way I had my post/create route set up for the JSON, it autoincrements over some of the same IDs. <br/>
-Displaying list better after correcting JSON.<br/>


SETUP

http://localhost:3001/api/v1/employees  -- Full list of employees as JSON
http://localhost:3001/api/v1/employees/:id --Individual employee as JSON


POSTGRESQL
Create User 
Username: employees-api
Password: password1

BACKEND - employees-api folder
bundle install
rake db:setup
rails s -p 3001

FRONTEND - employees folder
npm install
npm start
Runs on port 3000

Both frontend and back end must be running.
