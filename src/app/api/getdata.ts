import axios from 'axios';
import { productsBaseDetails } from '../../mockdata/itembasedetails';


export const getItemBaseDetails = () : Promise<any> => {

    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation, e.g., fetching data from an API
        setTimeout(() => {
          // Resolve the promise with the mock JSON object
          resolve(productsBaseDetails);
          
          // Alternatively, you can reject the promise if there's an error
          // reject(new Error('Failed to fetch data'));
        }, 3000); // Simulating a delay of 1 second
      });

    //return axios.get('http://localhost:4545/api/getitembasedtls', {});
}