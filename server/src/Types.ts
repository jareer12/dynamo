export interface Response {
  Success?: boolean;
  Message?: string;
  Data?: any[] | object;
  ErrorCode?: number;
}
