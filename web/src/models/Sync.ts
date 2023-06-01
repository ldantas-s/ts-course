import axios, { AxiosPromise } from 'axios';

interface SaveType {
  id?: number;
}

export class Sync<T extends SaveType> {
  constructor(public rootUrl: string) {}

  save(data: T): AxiosPromise<T> {
    const id = data.id;

    if (id) {
      //put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //post
      return axios.post(this.rootUrl, data);
    }
  }

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
    // .then((response: AxiosResponse): void => {
    //   return response.data;
    // });
  }
}
