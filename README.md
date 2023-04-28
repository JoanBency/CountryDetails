<a name="readme-top"></a>

<div align="center">
  <img src="frontend/src/assets/world-logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Country Details</b></h3>

</div>


# Table of Contents

- [Project Description](#project-description)
  - [Platform Used](#platform-used)
  - [Deployed Live Demo](#live-demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Run tests](#run-tests)

<!-- PROJECT DESCRIPTION -->

# Country Details <a name="project-description"></a>

> Country Details is an app where you can search for different countries and see information regarding them.


## Platform Used <a name="platform-used"></a>


<h5>Client - React.js</h5>
  <br />
<h5>Server - Node.js, Express</h5>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## Deployed Live Demo <a name="live-demo"></a>

> Client and Server are deployed using <b>heroku</b>

- [Country Details Demo](https://countrydetails-search.herokuapp.com)

> Deployed Server Side URL

- [https://countrydetails-api.herokuapp.com](https://countrydetails-api.herokuapp.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started <a name="getting-started"></a>

> Clone the code from GitHub and unzip it. Folder named <b>frontend</b> holds the React.js Client code while the folder <b>backend</b> holds the Node.js Server code.

### Prerequisites

In order to run this project you need:

<ol>
    <li>Node.js</li>
    <li>npm</li>
</ol>

### Setup

> Server Side:

```
  cd frontend

  npm install
```

> Client Side:

```
  cd backend

  npm install
```

Create a <b>.env.local</b> file and add the value for <b>REACT_APP_API_URL</b> as the url of the localhost with port server is run on.
eg: http://localhost:3001

### Usage

> Server Side:

```
  npm start
```

> Client Side:

```
  npm start
```

### Run tests

We use Jest for unit testing on the Server side and Cypress for e2e testing on the Client side. 
To run tests, run the following command:

> Server Side:

```
  npm test
```

> Client Side:

```
  npx cypress run
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>