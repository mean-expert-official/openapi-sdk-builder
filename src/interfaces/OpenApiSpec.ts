export interface IOpenApiSpec {
  swagger: string;
  info: {
    version: string;
    title: string
  };
  paths: { [key: string]: IPath; };
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
  get?: object;
  put?: object;
  post?: object;
  head?: object;
  patch?: object;
  delete?: object;
}

export interface IProperty {
  "$ref"?: string;
  type?: string;
  format?: string;
  description?: string;
  default?: string;
}

export interface IProperties { [key: string]: IProperty; }
