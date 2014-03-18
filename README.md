nightwatch-example
==================


requires: nodeJS (download & install from http://nodejs.org/)

includes node modules: nightwatch, moment, mkdirp 

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

production:          ./nightwatch<br>
pre-prod:			 ./nightwatch -e preprod<br>	
staging:			 ./nightwatch -e staging<br>



