import React from 'react';

const HttpUtility = {
  
  getHeaders: async() => {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Cookie', accessToken);
    return headers;
  },

  getRequest: async(uri:string) => {
    var headers = await HttpUtility.getHeaders;
    return fetch(uri, { headers: headers});
  },
  
}

export default HttpUtility;