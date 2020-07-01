export class Api {
  sendData(data, url) {
    return fetch(url, {
      method: 'POST',
      body: data,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
