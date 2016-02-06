import { BASE_URI } from './constants.js';

let API = {fetch };

function fetch(path) {
  let uri = `${BASE_URI}/${path}`;
  let request = new XMLHttpRequest();

    return new Promise( (resolve, reject) => {
      //asynch call
      request.open("GET", uri, true);

      request.onload = () => {
        //if request was successful and not an error, resolve the Promise
        if(request.status >= 200 && request.status < 400){
          //JSON returns a JS object
          resolve( JSON.parse(request.response) );
        }
      };

      request.onerror = () => {
        // rejecting Promise if an error occurs
        reject(new Error("Error fetching posts") );
      }
      //send the call
      request.send();
    });
  }

export default API;
