import * as ejs from "ejs";
import * as fs from "fs";
import * as path from "path";
import { Console } from "../helpers/Console";
import {
  IDefinition,
  IOpenApiSpec,
  IOptions,
  ITag,
  ITemplate,
} from "../interfaces";

export class BasePlugin {

  protected models: IDefinition[];

  constructor(protected api: IOpenApiSpec, protected options: IOptions) {
    this.api = api;
    this.models = this.getModels();
    return this;
  }

  protected getModels(): IDefinition[] {
    return this.api.tags.filter((tag: ITag) => {
      return this.api.definitions[tag.name];
    }).map((tag: ITag) => {
      this.api.definitions[tag.name].name = tag.name;
      return this.api.definitions[tag.name];
    });
  }

  protected render(schema: ITemplate[]): void {
    schema.forEach(
      (config: any) => {
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
