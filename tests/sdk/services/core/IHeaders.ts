/**
 * @interface IHeaders
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description Request interface that will be passed to the specified
 * request resolver for each HTTPRequest.
 */
export interface IHeaders {
    [key: string]: string
}