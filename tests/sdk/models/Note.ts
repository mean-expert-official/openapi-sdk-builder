/**
* @interface NoteInterface
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript interface represents 'Note' contract
* definition from an OpenAPI specification file.
**/
export interface NoteInterface {
  title: string;
  content: string;
  id: any;
  createdAt: string;
  updatedAt: string;
}
/**
* @class Note
* @author Jonathan Casarrubias <t:@johncasarrubias>
* @author MEAN Expert <gh:mean-expert-official>
* @license MIT
* @description This TypeScript class represents 'Note' definition
* from an OpenAPI specification file.
**/
export class Note implements NoteInterface {
  title: string;
  content: string;
  id: any;
  createdAt: string;
  updatedAt: string;
  /**
  * @method constructor
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The constructor will receive data based on NoteInterface
  * and set the received values into the instance properties.
  **/
  constructor(data?: NoteInterface) {
    if (data) Object.assign(this, data);
  }
  /**
  * @method getModelName
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description The name of the model represented by this $resource,
  * i.e. `Note`.
  **/
  public static getModelName(): string {
    return 'Note';
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias <t:@johncasarrubias>
  * @author MEAN Expert <gh:mean-expert-official>
  * @license MIT
  * @description
  * This method creates an instance of Note for dynamic purposes.
  **/
  public static factory(data: NoteInterface): Note{
    return new Note(data);
  }
}
