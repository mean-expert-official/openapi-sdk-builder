/**
* @interface AccessTokenInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'AccessToken' contract
* definition from an OpenAPI specification file.
**/
export interface AccessTokenInterface {
  id: string;
  ttl: number;
  created: string;
  userId: any;
}
/**
* @class AccessToken
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'AccessToken' definition
* from an OpenAPI specification file.
**/
export class AccessToken implements AccessTokenInterface {
  id: string;
  ttl: number;
  created: string;
  userId: any;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on AccessTokenInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: AccessTokenInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `AccessToken`.
  **/
  public static getModelName(): string {
    return 'AccessToken';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of AccessToken for dynamic purposes.
  **/
  public static factory(data: AccessTokenInterface): AccessToken{
    return new AccessToken(data);
  }
}
