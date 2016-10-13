const name = "Pom eiei kuy asdfasdsdafasdfsf"

import{sayHi} from './function.js'

console.log(sayHi(name))


import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
axios.get(batmanUrl)
.then(response => {
        console.log('GET Title:',response.data.Title)
    })
