
# Introduction
This script allows you to make your game activity in discord

# How to download
Go to [releases](https://github.com/Cookiemp4/DiscordCode/releases/tag/DiscordCodeGameActivity) and look for the latest release of the plugin you want. You can also compile it from source (instructions below).
# Launch
- Download [Node.Js](https://nodejs.org/en/), go to the file, or create a .bat file and write - [node index.js](https://ru.wikipedia.org/wiki/Node.js)
- Let's go to the [site](https://discord.com/developers/applications), your bot should be there, go to General Information, there will be APPLICATION ID(put in the script)
# What is responsible for what
- Name under the nickname of the bot 
-
state : "Name",  
details : "Name", 
- Avatar + text avatar 
-
large_image : "The name of the avatar that was uploaded", 
large_text : "Sheesh",
small_image : "The name of the avatar that was uploaded",
small_text : "Sheesh",
- URL link
-
{label : "My Steam." , url : "link"},
{label : "My GitHub.",url : "link"},

# How to change avatar

- Let's go to the [site](https://discord.com/developers/applications), your bot should be there, go to Rich Presence Art Assets and load your avatar from below the, name will be the keyword where it will be necessary to put in the script

# AutoStart 

import getpass, os, time


USER_NAME = getpass.getuser()


def add_to_startup(file_path=""):
    if file_path == "":
        file_path = os.path.dirname(os.path.realpath(__file__))
    bat_path = r'C:\Users\%s\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup' % USER_NAME
    with open(bat_path + '\\' + "open.bat", "w+") as bat_file:
        bat_file.write(r'start "" %s' % file_path)

add_to_startup()
