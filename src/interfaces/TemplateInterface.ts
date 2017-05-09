export interface ITemplate {
  template: string;
  output: string;
  params: IParams;
}

export interface IParams {
  [key: string]: any;
}
