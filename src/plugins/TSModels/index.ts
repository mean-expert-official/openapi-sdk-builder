import { BasePlugin } from "../BasePlugin";
import {
  IDefinition,
  IOpenApiSpec,
  IOptions,
  IParams,
  IPlugin,
  IProperties,
  ITemplate,
} from "../../interfaces";
/**
 * @class {IPlugin} TSModels
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description
 * This plugin will create TypeScript Models from an OpenAPISpec object.
 */
export class TSModels extends BasePlugin implements IPlugin {
  /**
   * @method constructor
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description The constructor will receive an object representing the API
   * from an OpenApi specification file and will receive the project options.
   */
  constructor(protected api: IOpenApiSpec, protected options: IOptions) {
    super(api, options);
  }
  /**
   * @method build
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description The build method in this plugin will create a set of TypeScript classes
   * representing models from an OpenApi specification file.
   */
  public build(): void {
    // Build template schema
    const schema: ITemplate[] = this.getDefinitions().map((definition: IDefinition) => {
      // Create Template Parameters
      // Basically we are passing the definition definition and build property method
      const params: IParams = { definition, buildProperties: this.buildProperties };
      // Return template configuration object
      return {
          output: `/models/${ definition.name }.ts`,
          params,
          template: "TSModels/templates/model.ejs",
      };
    });
    // Schema is ready to be rendered
    this.render(schema);
  }
  /**
   * @method buildProperties
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description The buildProperties method will generate the interfaces and classes properties.
   */
  private buildProperties(properties: IProperties): string {
    return Object.keys(properties).map((property: string) => {
       return `  ${ property }: ${ properties[property].type ? properties[property].type : "any" };`;
    }).join("\n");
  }
}
