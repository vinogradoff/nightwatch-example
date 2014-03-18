nightwatch-example
==================


requires: nodeJS (download & install from http://nodejs.org/)<br>
includes 3-rd party node modules: nightwatch, moment, mkdirp 

selenium-server is included as selenium-server-standalone-2.40.0.jar,<br>
you can replace it with actual version from http://seleniumhq.org),<br>
you will need to update setting.json then.<br>

the start script nightwatch is there for Linux/Mac OS, you might want to create .bat for Windows.

starting tests:<br>
all tests:          ./nightwatch<br>
some tests:         ./nightwatch -t tests/&lt;test1&gt;<br>
some test group:    ./nightwatch -g tests/&lt;test1&gt;,tests/&lt;test2&gt;...<br>
all tests, except: 	./nightwatch -s tests/&lt;test1&gt;,tests/&lt;test2&gt;...<br>

changing enviroments:

production:          ./nightwatch <br>
pre-prod:			 ./nightwatch -e preprod<br>	
staging:			 ./nightwatch -e staging<br>

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



