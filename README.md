nightwatch-example
==================


requires: nodeJS (download & install from http://nodejs.org/)

selenium-server is included as selenium-server-standalone-2.40.0.jar,
you can replace it with actual version from http://seleniumhq.org),
you will need to update setting.json then.

the start script nightwatch is there for Linux/Mac OS, you might want to create .bat for Windows.

starting tests:
all tests:          ./nightwatch
some tests:         ./nightwatch -g tests/<test1>,tests/<test2>...
all tests, expecpt: ./nightwatch -s tests/<test1>,tests/<test2>...


