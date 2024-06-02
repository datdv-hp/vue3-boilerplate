import type { AxiosResponse } from 'axios';
import HttpStatus from './constants/http.constant';
import type { OrderDirection } from './constants/common.constant';

export type Prettify<T> = {
  [P in keyof T]: T[P];
};

export type IResponseError<T = any> = {
  key: string;
  message: string;
  errorCode: HttpStatus;
  data?: T;
};

export type IBodyResponse<T> = AxiosResponse & {
  success: boolean;
  isRequestError?: boolean;
  code: HttpStatus;
  message: string;
  error: string;
  data: T;
  errors?: IResponseError<any>[];
};

export type IGetListData<T> = {
  items: T[];
  totalItems: number;
};

export type IQueryParams = {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection | string;
  keyword?: string;
};

export type IOption = {
  title: string;
  value: string | number;
  disabled?: boolean;
  other?: any;
};
