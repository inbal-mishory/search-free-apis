export interface IApisList {
  count: number;
  entries: IApiModel[];
}

export interface IApiModel {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export class ApiModel {
  api: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  link: string;
  category: string;
  constructor(value: IApiModel) {
    this.api = value.API;
    this.description = value.Description;
    this.auth = value.Auth;
    this.https = value.HTTPS;
    this.cors = value.Cors;
    this.link = value.Link;
    this.category = value.Category;
  }
}
