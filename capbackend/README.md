## Mapsical - A maps-based social network

### How to get started locally (for OSX)

1. Fork the git repo onto your own account
2. Locate the web URL of your forked version of this project under Clone or Download on Github
3. Open up Terminal, and decide which folder this will exist within
4. Then, 'git clone https://github.com/YOURUSERNAME/Mapsical.git'
5. cd into your folder
6. Check your version of npm & node by doing 'npm --version' and 'node --version'; If it does not exist, download it [here](https://nodejs.org/en/)
6. Return to Terminal, type 'npm install' which will automatically download all the dependencies within package.json
7. Explicitly type 'npm install mongodb' in-case this isn't already downloaded
8. Now you're ready to run the database! Type 'mongod'
9. Open up another Terminal window to the same location and type 'npm start'
10. Open your browser to localhost:3000 and there you have it!
