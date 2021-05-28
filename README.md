# template-expressjs-typescript
A starter template for nodejs and expressjs for use typescritp, view engine=ejs

# How to use
to use this template youo have to have already installed nodejs and npm.
- write command "npm install" to install all the dipendency

npm command :
- npm run start : it start the javascript version
- npm run build : it convert from typescript to javascript
- npm run test  : it test the typescript code without convert to javascript

# how to publish
To publish your project, first test it "npm tun test", as second convert to javascirpt "npm run build", as third test the real server "npm run start".

# how to use
The "dist" folder is where the javascript code will go, you have to modify the src folder.

All the folder :
- dist    : where the javascipt code will go
- public  : where there will the css, js and image code that will go on the server
- src     : where you have to write the typescript code
     - bin     : where there is the file that node will load
     - routes  : where there will be all the routes that the server have
     - app.js  : The real app.js, modify it to add think like routes or session etc.
- views   : where there will be all the page that node can render with ejs 