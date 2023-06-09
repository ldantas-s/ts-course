export class Attributes<T extends object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll = (): T => {
    return this.data;
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
