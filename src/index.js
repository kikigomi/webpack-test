var _ = require('lodash');

import './style.css';
import './hello.scss'
//named import의 규칙은 반드시 {}에 동일한 이름으로 사용해야함.
import {area, circumference} from "./circle";
//default import 규칙 {} 없이 이름을 바꿀수 있다.
import aaa from './cube'

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
console.log("test");
console.log(area(5));
console.log(aaa(5));

document.body.appendChild(component());