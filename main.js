import 'babel-polyfill';

export const API = {
  request: () => Promise.resolve('OK')
};

export const Client = {
  then: false,
  catch: false,
  finally: false,

  apiCall: () => {
    Client.then = false;
    Client.catch = false;
    Client.finally = false;

    return API.request()
      .then(res => {
        Client.then = true;
        console.log('THEN', res);
      })
      .catch(err => {
        Client.catch = true;
        console.log('CATCH', err);
      })
      .finally(() => {
        Client.finally = true;
        console.log('FINALLY');
      });
  }
};
