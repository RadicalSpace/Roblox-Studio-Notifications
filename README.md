# Roblox Studio Notifications
Sends you a computer notification when someone tests your game in RobloxStudio (great for roblox team creates)

Instructions!

- First, make a website running on two files, one node.js file, and another HTML file
- In the game you want to send notifications, make sure you enable HTTP requests in the game settings
- The contents of the script.js file go in node.js file in the website
- The contents of the index.html file go in the HTML file in the website
- In the Roblox game, make a server script located in "ServerScriptService"
- The contents of request.lua file go in the server script in ServerScriptService
- Make sure the placeholder text in certain parts of the lua and HTML scripts are adjusted accordingly to what you are working on
- Make sure the URL in the lua script ends with "/trigger" (e.g. example.com/trigger)
