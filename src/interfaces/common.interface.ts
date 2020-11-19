export interface KeyValuePair {
  [key: string]: any;
}

export interface HttpHeader extends KeyValuePair {
  "Authorization"?: string;
  "Content-Type"?: string;
}
