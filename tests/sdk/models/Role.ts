/**
* @interface RoleInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'Role' contract
* definition from an OpenAPI specification file.
**/
export interface RoleInterface {
  id: any;
  name: string;
  description: string;
  created: string;
  modified: string;
}
/**
* @class Role
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'Role' definition
* from an OpenAPI specification file.
**/
export class Role implements RoleInterface {
  id: any;
  name: string;
  description: string;
  created: string;
  modified: string;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on RoleInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: RoleInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `Role`.
  **/
  public static getModelName(): string {
    return 'Role';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of Role for dynamic purposes.
  **/
  public static factory(data: RoleInterface): Role{
    return new Role(data);
  }
}
