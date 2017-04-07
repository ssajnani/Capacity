## [Home](https://ssajnani.github.io/Capacity/homepage.html) | [Team Roster](https://ssajnani.github.io/Capacity/teamPage.html) | [Software Design](https://ssajnani.github.io/Capacity/softwaredesign.html) | [UI Design](https://ssajnani.github.io/Capacity/uidesign.html) | [Project Plan](https://ssajnani.github.io/Capacity/projectplan.html) | [Project Retrospective](https://ssajnani.github.io/Capacity/projectretrospective.html)

# Project Plan

## As of Stage 3...
We have the following features implemented:

### Users
Users can register and authenticate themselves with Capacity. Registering through Capacity allows users to post, upvote, downvote, and report messages. This functionality allows users to self-moderate their communities and places. Users are also able to allow Capacity to access their location data.

### Messages
Users can post messages that should report on information about the current place. For example, a user may post that the library is full or there is no wait to get into the bar. Other users can upvote or downvote this message, eventually providing a way for useful messages to float to the top and for unhelpful messages to be phased out. Messages can also be reported for inappropriate content which will flag an actual moderator. The messages are tied to both the user who posted them, and to the place they are pertaining to.

### Predictive Search Bar
From our homepage, we have implemented a predictive search bar with the help of the Google Places API. This allows users to begin typing and see suggested places before finishing their query. All places will be linked to a unique ID provided by Google, to keep track of which places have been searched before.

### Recommended Places
According to the current displayed location, we use the Google Places API to display recommended places. For example, displaying a Wendy's may show a recommended location of a nearby Harvey's.

### Map Display
We include a map display of the location, as well as its surrounding area. This map is provided by the Google Maps API, which allows zooming and panning of the interactive map.

### Heat Map
Overlayed on our map display is a heat map, which represents the current or typical density of where people are on a map. This is done using the Charts JS API to create our overlay. Data is collected from logged in user locations.

### Our Dependencies
As of now, we depend on Google APIs, specifically Places and Maps for our publically accesible data. All other data will be recorded and stored by our application. We also depend on Grails and Node (for Vue) for our front and back-end resources which can be installed easily and is explained in our README.
