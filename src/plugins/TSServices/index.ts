import { BasePlugin } from "../BasePlugin";
import {
    IDefinition,
    IHTTPParameter,
    IHTTPMethod,
    IOpenApiSpec,
    IOptions,
    IParams,
    IPath,
    IPaths,
    IPlugin,
    IProperties,
    ITemplate,
} from "../../interfaces";
/**
 * @class {IPlugin} TSServices
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description
 * This plugin will create TypeScript Models from an OpenAPISpec object.
 */
export class TSServices extends BasePlugin implements IPlugin {
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
            // Basically we are passing the definitionand build property method
            const params: IParams = {
                definition,
                scope: this,
            };
            // Return template configuration object
            return {
                output: `/services/${definition.name}.ts`,
                params,
                template: "TSServices/templates/service.ejs",
            };
        });
        // Schema is ready to be rendered
        this.render(schema);
        this.render([{
            output: `/services/core/HTTPService.ts`,
            params: {},
            template: "TSServices/templates/core/http.ejs",
        }, {
            output: `/services/core/IHeaders.ts`,
            params: {},
            template: "TSServices/templates/core/iheaders.ejs",
        }, {
            output: `/services/core/IRequest.ts`,
            params: {},
            template: "TSServices/templates/core/irequest.ejs",
        }, {
            output: `/services/core/index.ts`,
            params: {},
            template: "TSServices/templates/core/index.ejs",
        }]);
    }
    /**
     * @method buildDefinitionPaths
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description The buildDefinitionPaths method will generate the interfaces and classes properties.
     */
    private buildDefinitionPaths(definition: IDefinition): string {
        const paths: IPaths = this.getDefinitionPaths(definition);
        return Object.keys(paths).map((pathKey: string) => {
            const path: IPath = paths[pathKey];
            const result: string[] = [];
            Object.keys(path).forEach((methodName: string) => {
                const method: IHTTPMethod = path[methodName];
                const operationId: string = this.normalizeOperationId(method.operationId);
                result.push(`
  /**
   * @method ${ operationId}<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>${ method.deprecated ? `
   * @deprecated` : ""}
   * @license MIT
   * @description
   * ${ method.summary}
   */
  public ${ operationId}<T>(${this.buildMethodParameters(method)}
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "${ methodName}",
      params: {${ this.buildRequestObject(method)}},
      path: "${ pathKey}",
    });
  }`);
            });
            return result.join("");
        }).join("");
    }
    /**
     * @method buildMethodParameters
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description The buildMethodParameters method will generate the interfaces and classes properties.
     */
    private buildMethodParameters(method: IHTTPMethod): string {
        method.parameters.push({
            name: "headers",
            required: false,
            type: "IHeaders",
        });
        return method.parameters.map((parameter: IHTTPParameter) => {
            return `
    ${ parameter.name}${!parameter.required && !parameter.default
                    ? "?"
                    : ""}: ${parameter.type ? parameter.type : "any"}`;
        }).join(",");
    }
    /**
     * @method buildRequestObject
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description The buildRequestObject method will generate the interfaces and classes properties.
     */
    private buildRequestObject(method: IHTTPMethod): string {
        const query: IHTTPParameter[] = method.parameters.filter((parameter: IHTTPParameter) => {
            return parameter.in === "query";
        });
        return `
        body: {${ method.parameters.filter((parameter: IHTTPParameter) => {
                return parameter.in === "body";
            }).map((parameter: IHTTPParameter) => {
                return `\n          ${parameter.name},`;
            }).join("")}
        },
        path: {${ method.parameters.filter((parameter: IHTTPParameter) => {
                return parameter.in === "path";
            }).map((parameter: IHTTPParameter) => {
                return `\n          ${parameter.name},`;
            }).join("")}
        },
        query: {${ method.parameters.filter((parameter: IHTTPParameter) => {
                return parameter.in === "query";
            }).map((parameter: IHTTPParameter) => {
                return `\n          ${parameter.name},`;
            }).join("")}
        },
      `;
    }
}
