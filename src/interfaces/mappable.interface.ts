export interface Getable<T> {
  get(data: any): T;
}

export interface Sendable<T, S> {
  send(data: T): S;
}
