import { IHeaders } from "./IHeaders";
/**
 * @interface IRequest
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description Request interface that will be passed to the specified
 * request resolver for each HTTPRequest.
 */
export interface IRequest {
  headers?: IHeaders,
  method: string,
  path: string,
  params: {
    body: { [key: string]: any },
    path: { [key: string]: any },
    query: { [key: string]: any },
  }
}