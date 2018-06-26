import 'babel-polyfill';

export const API = {
  request() {
    return Promise.resolve('OK');
  }
};

export const Client = {
  then: false,
  catch: false,
  finally: false,

  callAPI() {
    this.then = false;
    this.catch = false;
    this.finally = false;

    return API.request()
      .then(res => {
        this.then = true;
        console.log('THEN', res);
      })
      .catch(err => {
        this.catch = true;
        console.log('CATCH', err);
      })
      .finally(() => {
        this.finally = true;
        console.log('FINALLY');
      });
  }
};
