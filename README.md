nightwatch-example
==================


requires: nodeJS (download & install from http://nodejs.org/)<br>
includes 3-rd party node modules: nightwatch, moment, mkdirp 

selenium-server is included as selenium-server-standalone-2.40.0.jar,<br>
you can replace it with actual version from http://seleniumhq.org),<br>
you will need to update setting.json then.<br>

the start script nightwatch is there for Linux/Mac OS, you might want to create .bat for Windows.

you may need to set $EBAY_USER and $EBAY_PASSWORD in your environment:

    export EBAY_USER=user123
    export EBAY_PASSWORD=pwd123
starting tests:<br>
all tests:
          
    ./nightwatch
    
some tests:

    ./nightwatch -t tests/short;<br>
some test group:

    ./nightwatch -g tests/demo;test/others...
all tests, except:

    ./nightwatch -s tests/login;...

changing enviroments:

production:          

    ./nightwatch
pre-prod:

    ./nightwatch -e preprod
staging:

    ./nightwatch -e staging

Tests included in /tests folder:

demo/*  sandbox for experiments<br>
short.js the very short test of google.de<br>
login.js logins at eBay and checks if ebay 3.0 is active<br>
collection.js a short collection test of ebay 3.0<br>


TODO:

Global test steps (login and logout in every test without duplications)<br>
Update for the latest nightwatch release 0.4+


TODO in cooperation with NightwatchJS project:

incorporation of auto-screenshoting in the framework<br>
better use of custom variables in setting.json<br>
less duplication in environments settings


NOTE: this will not be working with the latest (for now) nightwatch-0.4.4 because of the changes in conventions.



