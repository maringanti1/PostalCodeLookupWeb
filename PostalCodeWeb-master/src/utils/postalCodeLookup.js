import config from "../api-config/config.json";
import logger from './logger';

export const postalCodeLookup = async (postalCode) => { 
  console.log(`${config.postcodeapi_baseurl.value}${config.autocomplete.value}${postalCode}`);
  logger.info('Fetching data from postal code api - started');
  logger.info(`${config.postcodeapi_baseurl.value}${config.autocomplete.value}${postalCode}`);
  const response = await fetch(`${config.postcodeapi_baseurl.value}${config.autocomplete.value}${postalCode}`);   
  const data = await response.json();   
  logger.info('Fetching data from postal code api - ended');
  // console.log(data);
  return data;
};
