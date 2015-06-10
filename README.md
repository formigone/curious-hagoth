# Curious Hagoth

> And it came to pass that Hagoth, he being an exceedingly curious man, therefore he went forth and built him an exceedingly large ship, (...) and launched it forth into the west sea. (...) And it came to pass that they were never heard of more. *Alma 63:5,8*

### Development

There are two npm commands to use in development:

 + ```npm start``` uses watchify to generate an unpacked bundle
 + ```npm run-script build``` runs the app through uglify
 
During development, you can run the unpacked version of the app at ```/index.dev.html```. The version of the app running in ```/index.html``` has been uglified, and is bundled with angular.js.
