export interface IOpenApiSpec {
  swagger: string;
  info: {
    version: string;
    title: string
  };
  paths: IPaths;
  tags: ITag[];
  consumes: string[];
  produces: string[];
  definitions: { [key: string]: IDefinition; };
}

export interface ITag {
  name: string;
}

export interface IDefinition {
  name?: string;
  properties?: IProperties;
  required?: string[];
  additionalProperties?: boolean;
}

export interface IPath {
  [key: string]: IHTTPMethod;
  get?: IHTTPMethod;
  put?: IHTTPMethod;
  post?: IHTTPMethod;
  head?: IHTTPMethod;
  patch?: IHTTPMethod;
  delete?: IHTTPMethod;
}

export interface IPaths {
  [key: string]: IPath;
}

export interface IHTTPMethod {
  tags: string[];
  summary: string;
  operationId: string;
  parameters: IHTTPParameter[];
  responses: IHTTPResponses;
  deprecated: boolean;
}

export interface IHTTPParameter {
  name: string;
  in?: string;
  description?: string;
  required?: boolean;
  type: string;
  format?: string;
  default?: any;
}

export interface IHTTPResponse {
  description: string;
  schema: {
    "$ref": string,
  };
}

export interface IHTTPResponses {
  [key: string]: IHTTPResponse;
}

export interface IProperty {
  "$ref"?: string;
  type?: string;
  format?: string;
  description?: string;
  default?: string;
}

export interface IProperties { [key: string]: IProperty; }
