export interface KeyValuePair {
  [key: string]: any;
}

export interface HttpHeader extends KeyValuePair {
  "Authorization"?: string;
  "Content-Type"?: string;
}

export interface HttpRequestOptions {
  queryParams?: KeyValuePair;
  body?: KeyValuePair;
  headers?: KeyValuePair;
}
