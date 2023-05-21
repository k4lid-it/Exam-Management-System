import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { }



// the inviglator not know it
const secertKey = `K1417@!Copte`;
// ONLY THE ADMIN MAKE IT


//The Dateset 
let std = [
    [`khaled`, `190188079`, `IT491`],
    [`abdullah`, `198752347`, `IT320`],
    [`hani`, `197658937`, `IT256`],
    [`ABDULRAHMAN`, `198745236`, `IT410`]
];

const crypto = require('crypto');

//Generate a hash from an input
function generateHash(input) {

    // creating an object named "hash", which makes SHA-256 hashs 
    const hash = crypto.createHash('SHA-256');

    // Update the data and make it the input.
    hash.update(input);

    // Create a hex string from the hash instance 
    const hexHash = hash.digest('hex');

    // Encode The hash into the base64 code.
    const baseHash = Buffer.from(hexHash, 'hex').toString('base64');

    return baseHash;

}

//Get the student data
function Fetch(Index1, Index1d, Index2, Index2d, Index3, Index3d) {
    let src = std[Index1][Index1d].substring(0, 2) + std[Index2][Index2d].substring(3, 7)
        + secertKey + std[Index3][Index3d].substring(2, 6);

    const Thepass = generateHash(src).substring(12, 6); // call generateHash function and cut it to size  

    console.log(Thepass); // console.log the password
}

//Get the index for a name
function passGen(name) {
    let notFound = true;
    let index = 0;
    for (let x of std) {
        if (x[0].toLowerCase() == name.toLowerCase()) {
            Fetch(index, 0, index, 1, index, 2);
            notFound = false;
        }
        index++;
    }
    if (notFound) { console.log(`The student name is not registered`); }
}


// This variable value will determine the output of all the functions. 
let Stdname = `khaled`;
passGen(Stdname);