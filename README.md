# eslint-default-config
I hope this files will help you to avoid the pain when you trying to create an app, but you spend a lot of hours to create a proper ESLint configuration for the fisrt (or second) time in your life. 

# About settings.json
I strongly recommend you to create ".vscode/" directory on a highest level of project, right nearby package.json file. Inside this directory create settings.json file. What code should be inside you'll find in my example. 


# About .eslingignore
This file would help you to forget about unnecessary folders and files
I didn't add it in this repository because it's up to project, but commonly i saw those lines in .eslintignore file

# Just copy code below and paste in .eslintignore file (create before file if it still absent)

build
node_modules
*.d.ts


