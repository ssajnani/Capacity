## [Home](https://ssajnani.github.io/Capacity/homepage.html) | [Team Roster](https://ssajnani.github.io/Capacity/teamPage.html) | [Software Design](https://ssajnani.github.io/Capacity/softwaredesign.html) | [UI Design](https://ssajnani.github.io/Capacity/uidesign.html) | [Project Plan](https://ssajnani.github.io/Capacity/projectplan.html)

# Project Retrospective 

## Workflow

In terms of version control, our group used the course-recommended 
gitflow system. We had a main ‘dev’ branch for major changes. Each 
minor addition would be branched off ‘dev’, and merged back to ‘dev’ 
when complete. These separate branches would usually be named after 
the contributor or the feature (e.g. ‘search-bar-enter’ or ‘chart’). 
Only when we had reached a stable milestone or stage completion 
would we finally merge ‘dev’ into ‘master’.

Our frontend was a single-page-app made with VueJS, a modern, fast, 
and lightweight JavaScript framework. To ease the creation of our 
frontend, we used Bulma as our CSS framework, which provided many 
prefabricated elements and components. Our charts were made using 
ChartJS, and we used Google’s Javascript Maps/Places API to retrieve 
location information.

The backend was originally created using Grails, but it was 
inconvenient to develop rendered single-page-apps and serve them 
directly. Eventually, we switched to a NodeJS environment with an 
ExpressJS server framework and MongoDB database to have a more 
consistent and streamlined development environment in Javascript and 
NPM. PassportJS was used for our user authentication system.

Both the frontend and backend used NPM for module/dependency 
management, task running, building, and running the server. There 
was no specific IDE or text editor required for programming, but our 
group members generally used SublimeText3.

Issues on the Github were delegated to individual members, and their 
progress would be updated weekly. It took some time early on for our 
members to familiarize themselves with the technologies. More 
experienced members helped teach and troubleshoot when needed. In 
the end, however, everyone was able to contribute something to the 
project.

## MVC/Design Patterns

We used various design patterns to minimize the need for 
communication between the frontend and backend. These 
patterns are associated with object creation, structural design, 
behavioural design, and table design.  

For object creation, our group decided to use an 
object pool pattern for our user and place classes to minimize the 
instances of objects corresponding to client requests. As such, the 
backend would look for an object with an associated ID in the 
database and would only instantiate a new object if required. In 
terms of structural design, a private class data pattern was 
utilized with the place, user, and message objects. Use of this 
pattern limited write access to class attributes, separated the data 
from the methods that used it, and encapsulated the class data 
initialization. For instance, write access was limited from 
the request because a message object could only be 
instantiated if a user object was authenticated. 

Behavioural design was an important part of our MVC framework, we 
chose to focus on a strategy based design pattern. Particularly, for 
selecting the upvote/downvote and check-in/check-out options. The 
desired algorithm for incrementing or decrementing a counter was 
chosen selectively based on the client request. Finally, for table 
design our group decided to use cross-reference validation with 
foreign keys. Foreign keys including the googleID and userID were 
given to the message class from the place object and the user object 
respectively. As a result, messages were owned by a specific user 
and associated with a specific place. 

Our group decided to adhere to MVC principles to develop the 
relationship between user interfaces, application logic and data. We 
decided to implement our server-side program as a REST API, we used 
client GET, PUT, POST or DELETE requests for CRUD operations. The 
model classes are represented by the mongoose-based javascript model 
classes that are in the folder 'capbackend/models'. The view classes 
are part of our front-end package which is in the folder 
'capbackend/public'. For our views, we decided to use a single 
static html page with multiple influencing javascript files that 
were compiled and grouped into a static folder. Our controller 
classes are housed under the 'capbackend/routes' folder, and respond 
to client requests with the appropriate application logic. These 
classes communicate via the REST API, in particular, a view class 
will send a client request over to the server-side. This client 
request will be recieved by a controller class. The controller class 
will respond to the request with the appropriate application logic, 
instantiating an instance of the model class if necessary.

An example of this includes the Sign-Up function in the view class. If 
a user wants to Sign-Up, they enter their username and password. As 
a response the view class sends a POST request with the given 
username and password through a REST API at the route '\signup'. In 
the authenticate controller class, once the request is recieved from 
the '\signup' route, the API looks for other users with the same 
username and password. If such a user exists, a response claiming 
the user exists is produced, else a new user is instantiated using 
the user model class by passing the username and password.   

For future reference, if were were to start our project again today, 
it would be useful to focus more on front-end/back-end 
communications. This is because there are a couple functions in the 
back-end that were made for use by the front-end but ended up not 
playing any purpose such as deleting a place object or some 
functions in the front-end such as location services that were not 
utilized in the back-end. The focus should be on creating methods 
that will play a role in both the back-end and front-end.   

## Refactor Retrospective



## Project Retrospective





<a href="#top">Back to Top</a>

