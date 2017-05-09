/**
* @interface RoleMappingInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'RoleMapping' contract
* definition from an OpenAPI specification file.
**/
export interface RoleMappingInterface {
  id: any;
  principalType: string;
  principalId: string;
  roleId: any;
}
/**
* @class RoleMapping
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'RoleMapping' definition
* from an OpenAPI specification file.
**/
export class RoleMapping implements RoleMappingInterface {
  id: any;
  principalType: string;
  principalId: string;
  roleId: any;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on RoleMappingInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: RoleMappingInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `RoleMapping`.
  **/
  public static getModelName(): string {
    return 'RoleMapping';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of RoleMapping for dynamic purposes.
  **/
  public static factory(data: RoleMappingInterface): RoleMapping{
    return new RoleMapping(data);
  }
}
