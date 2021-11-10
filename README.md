<div align='center'>
	<img src='https://user-images.githubusercontent.com/78938193/141059056-fb67c63d-2f47-4c7e-9f72-660bba9997d2.png' >

URL of Deployed Application v2: https://rubiocode.github.io/MakeMyDay.v2/

URL of GitHub Repository: https://github.com/rubiocode/MakeMyDay.v2


Make My Day.v1: https://themimmzyy.github.io/First_Project/Home/index.html
</div>

<br>


# Make My Day.v2: Photo Search App

## Table of Contents 

* [Description](#description)
    * [User Story](#user-story)
	* [Acceptance Criteria](#acceptance-criteria)
* [View](#view)
* [Installation](#installation)
* [Built With](#built-with)
* [Credits](#credits)
* [License](#license)

## Description

This version of the _Make My Day.v2_ application has its basis on a former group project [Make My Day App](https://themimmzyy.github.io/First_Project/Home/index.html) but focuses only on fetching random images, searching images, and infinite image scrolling. 

## User Story

```md
AS A photographer aficionado
I WANT an application where I can explore photos
SO THAT I can take inspiration on others photographic skills
```


## Acceptance Criteria

```md
GIVEN a photo search engine
WHEN I load the homepage
THEN I am presented with a randomized photo grid
WHEN I hover over the photo 
THEN I am presented with user information such as the user who took the photo, number of likes the photo has, and user image
WHEN I click on user imager
THEN I am routed to the user's preferred social media handle (if available some user do not have linked social media handles attached to their profiles)
WHEN I scroll down the photo grid
THEN I am presented with infinite scrolling
WHEN I search for a photo
THEN I am presented with phot results of the searched key name.
THEN I am presented once again with infinite scrolling of the searched key name.  
```


## View
To view the GitHub Pages deployed page click [here](https://rubiocode.github.io/MakeMyDay.v2/).

This is what the application looks like:

Landing Page: 

<img src="https://user-images.githubusercontent.com/78938193/141062541-482c063a-1e6d-440b-ac2e-68b0004c33c7.png" alt="Landing Page" style="height: 40rem ; width:40 rem;"/>


## Installation
To start using the _Make My Day.v2_ application you must follow these instructions:

First and foremost, make sure you login or signup for Unsplash and register as a Developer. It is important that you register as a Developer to get your ACCESS_KEY (own unique key) in order to make API calls. To sign up click [here](https://unsplash.com/developers)

***/IMPORTANT/***
Your ACCESS_KEY must be protected do not forget to store that key in your _.env_ file. All React .env variables must start with REACT_APP_(whatever name you choose for your access key). If you need more information about React .env click [here](https://create-react-app.dev/docs/adding-custom-environment-variables/). One last thing: Do NOT forget to restart the server after adding your environmental variables to your component. 

Once you have your own ACCESS_KEY follow the next steps:

* Fork and clone this repository and save it to your computer. For help how to fork and clone click [here](https://guides.github.com/activities/forking/) 

* Open your terminal and make sure node.js is installed. To download node.js click [here](https://nodejs.org/en/download/)

* Run command _npm i_ to install all the dependencies in this repository.

* Once all the packages have been installed, run _npm run start_.

Once you run the above command it will invoke React server and the application will run on http://localhost:3000/ 


## Build With 
* [React.js](https://reactjs.org/) - A JavaScript Library used for building user interfaces.
* [Node.js](https://nodejs.dev/learn/) - Node.js is an open-source, low-level, back-end JavaScript runtime platform that uses asynchronous programming and is a popular tool for almost any kind of project!.
* [Material-UI](https://mui.com/) - MUI provides a robust, customizable, and accessible library of foundational and advanced components, allowing to design and develop faster applications. 
* [Styled-Components](https://styled-components.com/) - Styled-Components allows to write actual CSS within the component while utilising templetate literals to style components.
* [Unsplash API](https://unsplash.com/developers) - Photo engine that allows applications to retrieve photos 

## Credits
[Infinite Scrolling](https://youtu.be/NZKUirTtxcg)
[Make My Day App.v1](https://github.com/TheMimmzyy/First_Project)
[Deploying to gh-pages](https://youtu.be/4NapRkCazks)
[Coding Addict- React](https://youtu.be/iZhV0bILFb0)
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)

## License 

![badge](https://img.shields.io/badge/License-mit-blue)

Copyright 2021 Rubidia Rubio. Licensed under the [MIT License](https://opensource.org/licenses/MIT)

All Rights Reserved. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.