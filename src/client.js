import * as Contenful from 'contentful';


// create API client, with Contentful
export const client = Contenful.createClient({
    space : '6bn5iyrtf007',                                    //process.env.REACT_APP_SPACE_ID ,
    accessToken: '0A3ZkqGbKqvHdNvIP301aPQhdba4x9tbd5GpkCrrVes' //process.env.REACT_APP_ACCESS_TOKEN
  });

  // process.env gets the enviornment varibles for safe (private) access of the API keys