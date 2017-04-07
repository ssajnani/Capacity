<title>Project Retrospective</title>
## [Home](https://ssajnani.github.io/Capacity/homepage.html) | [Team Roster](https://ssajnani.github.io/Capacity/teamPage.html) | [Software Design](https://ssajnani.github.io/Capacity/softwaredesign.html) | [UI Design](https://ssajnani.github.io/Capacity/uidesign.html) | [Project Plan](https://ssajnani.github.io/Capacity/projectplan.html) | [Project Retrospective](https://ssajnani.github.io/Capacity/projectretrospective.html)

# Project Retrospective 

## Workflow

In terms of version control, our group used the course-recommended 
Git workflow. We used a main ‘dev’ branch for major changes. Each 
minor addition would be branched off ‘dev’, and merged back to ‘dev’ 
when complete. These separate branches would usually be named after 
the contributor or the feature (e.g. ‘search-bar-enter’ or ‘chart’).
Our group worked on our own features that were isolated in order to
avoid merge conflicts, which proved useful when merging into 'dev'
and 'main' branches. Only when we had reached a stable dev build 
would we finally merge ‘dev’ into ‘master’.

Our frontend was a single-page-app made with VueJS, a modern, fast, 
and lightweight JavaScript framework. To ease the creation of our 
frontend, we used Bulma as our CSS framework, which provided many 
prefabricated elements and components. Our charts were made using 
ChartJS, and we used Google’s Javascript Maps/Places API to retrieve 
location information as well as our displayed map.

The backend was originally created using Grails, but it was 
inconvenient to develop rendered single-page-apps and serve them 
directly. Eventually, we switched to a NodeJS environment with an 
ExpressJS server framework and MongoDB database to have a more 
consistent and streamlined development environment in Javascript and 
NPM. NodeJS and ExpressJS also fit the lightweight build we were
aiming for. PassportJS was used for our user authentication system.

Both the frontend and backend used NPM for module/dependency 
management, task running, building, and running the server. There 
was no specific IDE or text editor required for programming, but our 
group members generally used Sublime Text 3 and WebStorm.

Issues on the Github were delegated to individual members based on their
preferences and previous experience, and their progress would be
updated weekly. It took some time early on for our members to
familiarize themselves with the technologies. More 
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

One of our best accomplishments was how organized, blocked, and
reusable our code is. For example, the way we handled the front end of the project forced us to be
organized in its creation. We used a Javascript framework called VueJS
that forced us to organize our code into individual components.
Each Vue component is a visual building block on our webpage,
which can be considered loosely as a class. These components have
separate files, allowing them to be organized into an easy to read format.
These components are then consolidated into an index file that combines
these separate files into one viewable page.

In the backend, we ensured each controller only controls its own model
class, and minimized our backend calls to prevent sending excessive
data from the browser to our backend server. We also only stored the
minimum amount of data to maintain a functioning frontend. This means
we used Google APIs to do most of the heavy-lifting. Using Google's
existing features allowed us to implement key features quickly and
reliably, with minimal logical code needed. We didn't want to reinvent
the wheel when Google has already done so much for us.

Our code fell short in some areas towards the end of our development.
These shortfalls were mainly aesthetic, such as resizing issues
upon refreshing the page, the check-in button not being consistent
on refresh, and forgetting to implement some features that existed in the
backend such as logout, downvote, and reporting buttons.

We also had problems connecting our front and backends, which can be
attrributed to doing so last minute. There was also some confusion
with storing objects in our database, where in some cases we store
too much information, but this can be attributed to learning
MongoDB quickly and not thoroughly.


## Project Retrospective

Our group went through some difficulty over the decision-making process on various elements of the project but ultimately succeeded in our goals and overcame our problems. We maintained constant communication throughout the stages of the project to organize meetings, formulate ideas to solve coding problems, and made sure every member was up to date. We used Slack for communication and Github for project management in order to work with code builds methodologically. We met weekly, which proved to be enough during most weeks; however, we scheduled more meetings when deadlines were approaching. In addition, front and backend teams often met outside
of general team meetings. Our interpersonal communication was a highlight of our group.

We encountered some problems over different phases of the project. One of the major things we could have done to improve our project would be to have better time management. Over the last few days of the project, we were on crunch time and were working on fixing all our bugs, and even adding some important features. This is partly due to outside responsibilities, other classes, and part-time jobs; when we did set aside time to work on our project, we were focused and efficient.

We found Github and Slack to be very useful tools for communication and project management as it allowed a mechanical third party to control our every move. If any member were to make a mistake and cause bugs in the codebase, we would easily be able to use the mechanical functions on Github to rollback changes for example. This allowed us to focus more on working with the code than confusing each other over conflicting code. Slack also was great for maintaining multiple teams business, as well as keeping the entire team in the loop.  We had the decision between Bootstrap and Bulma and decided to use Bulma for our frontend design as it was lightweight, easy to use and also had attractive design features that the group agreed on. This allowed us to focus less on creating graphics and working with art, and more on working with the codebase. We also found that using NodeJS and Express as our backend, along with Javascript for front-end, allowed us to use the same language for both parts of the project, which allowed us to integrate features and work with the frontend and backend seamlessly. NodeJS and Express also were much more lightweight in comparison to Grails, which we originally started with.

In the beginning, we chose to use Groovy and Grails to do our backend but we were having many problems with it. It was hard for the backend members to integrate the Java code to work with Javascript code without it being very hacky code. We also found that Groovy and Grails was unnecessarily heavy for the kind of project we were working with. Our web-application's concept implied a simple and lightweight solution that wouldn't cause too much strain on the server's hardware or hinder the user's experience in any way. In the last few weeks, we decided to make a big change to NodeJS and Express for the backend. The reason for this change was because NodeJS and Express was configured more easily for our needs and also allowed us to seamlessly integrate with our front-end which also used Javascript. This change allowed our application to run much faster and allowed our back-end to come out as a very clean code.



<a href="#top">Back to Top</a>

