export interface IOptions {
  api: string;
  sdk: string;
  plugins: IPluginOptions[];
  settings?: {
    verbose?: boolean;
  };
}

export interface IPluginOptions {
  name: string;
  options: {
    [key: string]: any;
  };
}
