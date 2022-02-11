/* eslint-disable no-unused-vars, no-shadow */
enum METHODS {
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
  method?: METHODS
  headers?: Record<string, string>
  timeout?: number
  data?: unknown
}

interface IRequest {
  [key: string]: string | number
}

class HTTPTransport {
  get = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.GET });

  post = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.POST });

  put = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.PUT });

  delete = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.DELETE });

  patch = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.PATCH });

  request = (url: string, options: IOptions = {}) => {
    const {
      headers = {},
      method = METHODS.GET,
      data,
      timeout = 3000,
    } = options;

    const queryParams: string = method === METHODS.GET ? queryStringify(data as IRequest) : '';

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

      if (method === METHODS.GET || data === undefined) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
