# sQuaa 11 - CS 2212 Team 11

![Team logo](http://orig05.deviantart.net/9320/f/2010/203/c/a/30___fsjal_falco_lombardi__by_ztoonlinkz.png)

# Capacity

How many times have you gone to the library looking for a cubicle only to wander for an hour? How many times have you cabbed downtown only to see the bar you wanted to visit was full? Think about the time you could have saved by knowing this information before you even left the house.

Our web-based application, currently named Capacity, is a tool that will help you save time by giving you the information you wish you had before getting to your destination. Capacity will report information on wait times, crowd sizes, seat availability, and more. This information is recorded interactively, by allowing users to self-report data with incentives from the destinations they are visiting. The self-reported data can be self-moderated, by allowing other users to comment and vote on the reliability of the information. Furthermore, crowd sizes can also be determined with data collected from location services as permitted by the user.

Users wishing to register will do so through their Facebook accounts, allowing for future features such as ‘check-ins’ and group chats to be added more seamlessly. This will be accomplished using the Facebook API.

Our ‘destination list’ will be populated with top destinations locally, using London as a sample city. If this model works, our application can easily be extended to other cities. The required information will be drawn from the Yelp API, which will include address, hours, and user reviews. Also, users could add their own destinations such as campus libraries, and student hubs.

Our home interface will summarize current busy locations, the user’s favourite locations, as well as where the user’s friends (through Facebook) are located. Data such as typical traffic, an historic traffic can be displayed in various charts using the Google Charts API.

Our self-reporting system will be built by hand, and will incorporate a reference system for verification of reported data. Incentives for reporting correct, honest data can be provided by destinations if they are interested. Due to the amount and dynamic nature of our data we are planning to incorporate JavaScript for front-end development 

Lastly, if the user complies, their location can be recorded when they log into the application and this data can be used to predict crowd sizes. This will be done through the Geolocation API provided by multiple companies, one example being Google.

[Capacity on GitHub](https://github.com/ssajnani/2212B-Project)

Last updated: Feb 2, 2017