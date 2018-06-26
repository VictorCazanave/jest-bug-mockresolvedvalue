import { API, Client } from './main';

API.request = jest.fn();

describe('Client.callAPI()', () => {
  it('Passed test with mockImplementation: should call then and finally', () => {
    API.request.mockImplementation(() => Promise.resolve('OK'));
    expect.assertions(3);

    return Client.callAPI().finally(() => {
      expect(Client.then).toBeTruthy();
      expect(Client.catch).toBeFalsy();
      expect(Client.finally).toBeTruthy();
    });
  });

  it('Failed test with mockResolvedValue: should call then and finally', () => {
    API.request.mockResolvedValue('OK');
    expect.assertions(3);

    return Client.callAPI().finally(() => {
      expect(Client.then).toBeTruthy();
      expect(Client.catch).toBeFalsy();
      expect(Client.finally).toBeTruthy();
    });
  });
});
