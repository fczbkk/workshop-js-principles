/*
Functions from utilities can be tested (see ./test/).
But they can not be accessed directly from exported library (see ./lib/ after
you run `npm run build`.
 */
import {sanitizeName} from './utilities.js';


export default class Person {

  constructor (name) {
    this.name = sanitizeName(name);
  }

}