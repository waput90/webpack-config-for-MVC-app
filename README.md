# Webpack configuration for MVC web apps

 this documentation helps people to run webpack using an MVC environment approach with different javascript application
 
 first you should create ```webpack.config.js``` to your current directory
 
 then add this code:
 
 ```
 // this constant will get the path of your current project
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        module1: path.resolve(__dirname, 'YOUR_SCRIPT_SOURCE_DIRECTORY'),
        module2: path.resolve(__dirname, 'YOUR_SCRIPT_SOURCE_DIRECTORY'),
    },
    output: {
        filename: '[name].bundle.js', // this will create multiple bundle file that names to the module entry
        path: path.resolve(__dirname, 'YOUR_SCRIPT_DESTINATION_DIRECTORY')
    }
};
```

for running the script you can just type to your terminal ```npx webpack``` 

NOTE: if there are no found ```webpack.config.js``` it will get the ./src directory by default
