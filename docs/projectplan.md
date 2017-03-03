## [Home](https://ssajnani.github.io/Capacity/homepage.html) | [Team Roster](https://ssajnani.github.io/Capacity/teamPage.html) | [Software Design](https://ssajnani.github.io/Capacity/softwaredesign.html) | [UI Design](https://ssajnani.github.io/Capacity/uidesign.html) | [Project Plan](https://ssajnani.github.io/Capacity/projectplan.html) 

# Project Plan

## As of Stage 2...
We have the following features implemented:

### Users
Users can register and authenticate themselves with Capacity. Registering through Capacity allows users to post their messages. Eventually, users functionality will expand to allow self-moderation and grow local communities.

### Messages
User can post messages that should report on information about the current place. For example, a user may post that the library is full or there is no wait to get into the bar. Other users can 'like' this message, eventually providing a way for useful messages to float to the top and for unhelpful messages to be phased out. The messages are tied to both the user who posted them, and to the place they are pertaining to.

### Predictive Search Bar
From our homepage, we have implemented a predictive search bar with the help of the Google Places API. This allows users to begin typing and see suggested places before finishing their query. All places will be linked to a unique ID provided by Google, to keep track of which places have been searched before.

### Map Display
We include a map display of the location, as well as its surrounding area. This map is provided by the Google Maps API, which allows zooming and panning of the interactive map.

### Our Dependencies
As of now, we depend on Google APIs, specifically Places and Maps for our publically accesible data. All other data will be recorded and stored by our application. We also depend on Grails and Node (for Vue) for our front and back-end resources which can be installed easily and is explained in our README.

## Our Total Goals
These are some features we hope to implement by the end of our project:

### Message 
This feature enables user to self-reported data that is self-monitored with the ability of allowing other users to make comment on and vote on the reliability of the information. Every user will possess a mark called user rating on a scale of 0 to 5 base on the average of all the data they have reported, in which reflect the reliability of the information the user report. For example, if someone is at Jack Astor and that place is fully occupied, he/she can share this message on the app, so this could be beneficial to people who intend go there and enable them know the status of the location in advanced. In addition, to secure the reliability of the app, any account with low user rating(0) will be disabled or permanently blocked once the user is verfied as intentionally giving out fraud information. This feature improves the app because whether heat graph or the google anaylsis
cannot grant user the most accurate information of a speicific time, but the message feature could. It is a platform that enable user to help each other by themselves.The message board is implement at the right column of the interface, with the latest message shows on the top. For each message, the user name,profile picture and date posted will all be showed together.

### Heat Graph 
Heat graph is the main feature of this app aim for providing a modified version of Google's Popular time, with the function of providing the real-time data about how pack a location is to the most accurate degree on each day of the week, each hour and on each special event day. It helps user save time by giving you the information you wish you had before getting to your destination such as wait times and seat availability. The graph will be implement as showing in the picture above, for each restaurant, there will be a graph that have a horizontal axis that representing the time in hours and a vertical axis representing the percentage of packed. In additional, below each graph of restaurant, we will give some practical information such as alcohol permit, student off-campus meal plan card, type of card accept and signature items.  

### Recommend Places (Yelp) 
This feature is implement using yelp api. When a place is being searched by user , several similar places will be introduced on the right column of the interface, we call this section the recommend places. For example, Taylor Library will  be triggered as someone search for the capacity of Weldon Library, McDonald will be triggered when someone type Tim Hortons. In addition to this, all the recommend places will be ranked from the nearest distance to the farthest distance on a scope of 50 kilometres. In addition to this, “Yelp” is linked to the restaurant to provide more convenience and information for users. This feature is important to this project because it provides an alternative places for our users when their first choice is not able to meet. 

### Google Analysis 
Not only we provide real-time data, but also, we offer accumulative data from google’s popular time for users to take extra consideration and making the app become even more comprehensive. This project relies on this feature when there is an insufficient amount of data in our databas that could worked as our "back-up" and allowes us at least provide some information for user to make decision. To make this function feasible, we decide to use google api.
