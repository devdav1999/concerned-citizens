# Concerned Citizens

Concerned Citizens is a MERN prototype single page web that lets people compose letter campaigns to be sent to people of importance

**DO NOT** use this project as-is in production. It exposes an API to MongoDB
without any sort of security. The only purpose of the API is to allow rapid
front-end prototyping without much (or any) backend modifications. See the
"Securing the backend" section below for more info.

## Back End
The back end portion of this project is provided by a nodejs server that provides to backend data stored in MongoDB

## NPM Components

The following npm components are installed

-React
-Kc-react-widgets
-react-router-dom
-react-textarea-autosize

## Database

The Database is provided by mongoDB


## Set up

1. Clone repo:
`https://github.com/devdav1999/concerned-citizens`

2. Install both front-end and back end dependencies:

```
cd concerned-citizens
npm install
```

3. Set up a .env file (Ensure that you have a mongoDB account with a cluster. File should be in this format. This should be saved in the top level of directory.

`export MONGODB_URI='mongodb+srv://DBUSER:PASSWORD@cluster0-udki0.mongodb.net/test'`


DBUSER - your username
PASSWORD - password to your username
test - name of collection

4. Run the command:
`bash run.sh`


5. Screenshots of the app

![Screenshot](./client/public/screenshot4.png)
![Screenshot](./client/public/screenshot5.png)
![Screenshot](./client/public/screenshot6.png)

