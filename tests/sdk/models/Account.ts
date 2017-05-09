/**
* @interface AccountInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'Account' contract
* definition from an OpenAPI specification file.
**/
export interface AccountInterface {
  firstName: string;
  lastName: string;
  realm: string;
  username: string;
  email: string;
  emailVerified: boolean;
  id: any;
  createdAt: string;
  updatedAt: string;
}
/**
* @class Account
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'Account' definition
* from an OpenAPI specification file.
**/
export class Account implements AccountInterface {
  firstName: string;
  lastName: string;
  realm: string;
  username: string;
  email: string;
  emailVerified: boolean;
  id: any;
  createdAt: string;
  updatedAt: string;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on AccountInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: AccountInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `Account`.
  **/
  public static getModelName(): string {
    return 'Account';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
  }
}
