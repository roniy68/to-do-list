import _ from 'lodash';
import printMe from './print.js';

// Importing Style
import './style.css';

// Importing Images
import Icon from './assets/drsight.png';

//import data
import Data from './data/data.xml';
import Notes from './data/data.csv';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    // Add icon
    const myIcon = document.createElem


    document.body.appendChild(myIcon);

    element.appendChild(btn);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());