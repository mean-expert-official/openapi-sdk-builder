import * as ejs from "ejs";
import * as fs from "fs";
import * as path from "path";
import * as mkdirp from "mkdirp";
import { Console } from "../helpers/Console";
import {
  IDefinition,
  IHTTPMethod,
  IPath,
  IPaths,
  IOpenApiSpec,
  IOptions,
  ITag,
  ITemplate,
} from "../interfaces";

export class BasePlugin {

  protected definitions: IDefinition[];

  constructor(protected api: IOpenApiSpec, protected options: IOptions) {
    this.api = api;
    this.definitions = this.getDefinitions();
    return this;
  }

  protected getDefinitions(): IDefinition[] {
    return this.api.tags.filter((tag: ITag) => {
      return this.api.definitions[tag.name];
    }).map((tag: ITag) => {
      this.api.definitions[tag.name].name = tag.name;
      return this.api.definitions[tag.name];
    });
  }

  protected getDefinitionPaths(definition: IDefinition): IPaths {
    const paths: IPaths = {};
    Object.keys(this.api.paths).forEach((pathName: string) => {
      const path: IPath = this.api.paths[pathName];
      let method: IHTTPMethod;
      if (path.get) { method = path.get; }
      if (path.put) { method = path.put; }
      if (path.post) { method = path.post; }
      if (path.head) { method = path.head; }
      if (path.patch) { method = path.patch; }
      if (path.delete) { method = path.delete; }
      if (method.tags.find((tagName: string) => {
        return tagName === definition.name;
      })) {
        paths[pathName] = path;
      }
    });
    return paths;
  }

  protected normalizeOperationId(operationId: string): string {
    operationId = operationId.match(".") ? operationId.split(".").pop() : operationId;
    return operationId.replace("-", "_")
                      .replace("{", "")
                      .replace("}", "");
  }

  protected render(schema: ITemplate[]): void {
    schema.forEach(
      (config: any) => {
        const filePathArr: string[] = config.output.split(/\//); filePathArr.pop();
        const directory: string = path.join(this.options.sdk, filePathArr.join("/"));
        mkdirp.sync(directory);
        console.log(directory);
        Console.log(`Generating: ${this.options.sdk}${config.output}`);
        fs.writeFileSync(`${this.options.sdk}${config.output}`,
          ejs.render(fs.readFileSync(
            require.resolve(path.join(path.dirname(__filename), config.template)),
            { encoding: "utf-8" }),
            config.params,
          ),
        );
      },
    );
  }
}
