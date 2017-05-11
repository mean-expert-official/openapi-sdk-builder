/**
* @interface TodoInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'Todo' contract
* definition from an OpenAPI specification file.
**/
export interface TodoInterface {
  text: string;
  dueAt: string;
  done: boolean;
  id: any;
  createdAt: string;
  updatedAt: string;
}
/**
* @class Todo
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'Todo' definition
* from an OpenAPI specification file.
**/
export class Todo implements TodoInterface {
  text: string;
  dueAt: string;
  done: boolean;
  id: any;
  createdAt: string;
  updatedAt: string;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on TodoInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: TodoInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `Todo`.
  **/
  public static getModelName(): string {
    return 'Todo';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of Todo for dynamic purposes.
  **/
  public static factory(data: TodoInterface): Todo{
    return new Todo(data);
  }
}
