<div align="center">
    <img src="/frontend/public/castawayLogo.png"/>
    <h1>CASTAWAY</h1>
</div>

# [NOTICE]: DISCONTINUED
Note that as of June 2020 CASTAWAY will be discontinued and no further updates will be released. The app will still be available via our heroku deployment: https://castaway.herokuapp.com/

## About CASTAWAY
Repo for Informatics Capstone 2020, our project is focused on being an accurate source of information about refugees. Our mission is to create a solution to allow the general public and academics to obtain accurate information concerning refugees in one location. We want the general public to use the information to make informed decisions and academics to benefit their own work.

## Contact

If you have issues or concerns please contact one of the following individuals via email. 

* Rahma Kamel: kamelr@uw.edu
* Angela Shen: angelashen0607@gmail.com
* Tracy Huynh: thuynh12@uw.edu
* Brian Jhong: jhongb@uw.edu

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

* There is a .sample-env file that holds the template for enviornment variables needed to connect to your database. 
* Create a new .env file and copy and paste the contents from .sample-env. 
* Then add your MONGO_URI to the .env file. 
* Make sure you set an env var for that and the jwtSecret on deployment

## Installing

#### Install dependencies for backend

```
npm install
```
#### Install dependencies for frontend

```
npm run frontend-install
```

#### Run the client & backend with concurrently

```
npm run dev
```

#### Run the Express backend only

```
npm run backend
```

#### Run the React client only

```
npm run frontend
```

#### backend runs on http://localhost:5000 and frontend on http://localhost:3000

## Deployment

Our MERN stack application is currently deployed via Heroku: https://castaway.herokuapp.com/

## Built With

* [React](https://reactjs.org/) - Frontend development
* [Node.js](https://nodejs.org/en/) - Backend development

## Contributing

CASTAWAY will be discontinued as of June 2020 and no further updates will be released. The code is available for public use and please see our [LICENSE.md](LICENSE.md) file for details.

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Rahma Kamel** 
* **Angela Shen** 
* **Tracy Huynh** 
* **Brian Jhong** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
