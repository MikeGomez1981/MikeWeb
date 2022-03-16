
import {data} from '../data/data';

//import React from 'react';

export const getInfo = (name = '') => {

 
 if (name.length === 0 ){
    return [];
  }
 
  name = name.toLowerCase();

  return data.filter(data => data.name.toLowerCase().includes(name));
  //return [...data];

}



