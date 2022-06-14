# node-react-template

React + Node template setup ready to deploy to Heroku.

## Development

Start node dev server:

```
npm run dev-server
```
Server will be running on port 8080 unless environmental variable is provided.

In other command window start React app (client app):

```
npm run dev-client
```
Client app will run on ```localhost:3000```.

### Environmental variables

Create ```.env``` file and put the following content inside (edit if needed):

```
PORT=8080
```

## Deployment

If this folder is not a git repository, initialize it as one:
```
git init
```
Connect this repository to Heroku app:
```
heroku git:remote -a insert-your-app-name-here
```
Add changes:
```
git add .
```
Commit changes:
```
git commit -am "Deploy app to Heroku"
```
Publish app:
```
git push heroku master
```

### Further development
In order to commit further changes and deploy them, stick to the following instructions:
```
git add .
git commit -m "my commit message"
git push heroku master
```
