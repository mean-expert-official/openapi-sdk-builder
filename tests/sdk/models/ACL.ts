/**
* @interface ACLInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'ACL' contract
* definition from an OpenAPI specification file.
**/
export interface ACLInterface {
  model: string;
  property: string;
  accessType: string;
  permission: string;
  principalType: string;
  principalId: string;
  id: any;
}
/**
* @class ACL
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'ACL' definition
* from an OpenAPI specification file.
**/
export class ACL implements ACLInterface {
  model: string;
  property: string;
  accessType: string;
  permission: string;
  principalType: string;
  principalId: string;
  id: any;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on ACLInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: ACLInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `ACL`.
  **/
  public static getModelName(): string {
    return 'ACL';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of ACL for dynamic purposes.
  **/
  public static factory(data: ACLInterface): ACL{
    return new ACL(data);
  }
}
