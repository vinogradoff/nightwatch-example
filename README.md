nightwatch-example
==================


requires: nodeJS (download & install from http://nodejs.org/)

selenium-server is included as selenium-server-standalone-2.40.0.jar,<br>
you can replace it with actual version from http://seleniumhq.org),<br>
you will need to update setting.json then.<br>

the start script nightwatch is there for Linux/Mac OS, you might want to create .bat for Windows.

starting tests:<br>
all tests:          ./nightwatch<br>
some tests:         ./nightwatch -g tests/<test1>,tests/<test2>...<br>
all tests, expecpt: ./nightwatch -s tests/<test1>,tests/<test2>...<br>


