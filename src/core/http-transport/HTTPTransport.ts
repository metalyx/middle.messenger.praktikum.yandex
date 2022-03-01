/* eslint-disable no-unused-vars, no-shadow */
enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
/* eslint-enable */

function queryStringify(data: Object): string {
  let res = '';
  if (!data) {
    return res;
  }
  Object.entries(data).forEach(([key, val]: [string, any]) => {
    res += `${key}=${val}&`;
  });
  return `?${res.slice(0, -1)}`;
}

interface IOptions {
  method?: Methods
  headers?: Record<string, string>
  timeout?: number
  data?: unknown
}

type IRequest = Record<string, string | number>;

class HTTPTransport {
  get = (url: string, options = {}) => this.request(url, { ...options, method: Methods.GET });

  post = (url: string, options = {}) => this.request(url, { ...options, method: Methods.POST });

  put = (url: string, options = {}) => this.request(url, { ...options, method: Methods.PUT });

  delete = (url: string, options = {}) => this.request(url, { ...options, method: Methods.DELETE });

  patch = (url: string, options = {}) => this.request(url, { ...options, method: Methods.PATCH });

  request = (url: string, options: IOptions = {}) => {
    const {
      headers = {},
      method = Methods.GET,
      data,
      timeout = 3000,
    } = options;

    const queryParams: string = queryStringify(data as IRequest);

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url + queryParams);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = () => (xhr.status !== 200 && xhr.status !== 201 ? reject(xhr) : resolve(xhr));
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === Methods.GET || data === undefined) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
