import { Observable } from "rxjs/Observable";
import { IRequest } from "./IRequest";
/**
 * @class HTTPService
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @author MEAN Expert <gh:mean-expert-official>
 * @license MIT
 * @description This TypeScript class provides basic functionality for each
 * of the http services.
 */
export class HTTPService {
    /**
     * @property {HTTPService} instance Class singleton instance reference.
     */
    private static instance: HTTPService;
    /**
     * @property {T} request Function that will execute each HTTP Request.
     */
    public request: <T>(request: IRequest) => Observable<T>;
    /**
     * @method constructor
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description The constructor will set a default HTTP Request resolver
     * by using fetch. This can be changed by calling setRequestResolver<T>()
     */
    private constructor() {
        this.setRequestResolver(<T>(request: IRequest) => {
            return new Observable<T>((observer) => {
                fetch(request.path, {
                    body: request.params,
                    headers: {  
                      "Content-type": "application/json",
                    },
                    method: request.method,
                }).then(observer.next).catch(observer.throw);
            });
        });
    }
    /**
     * @method getInstance
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description This static method will return the singleton instance from this class.
     */
    public static getInstance(): HTTPService {
        if (!HTTPService.instance) {
            HTTPService.instance = new HTTPService();
        }
        return HTTPService.instance;
    }
    /**
     * @method setRequestResolver
     * @author Jonathan Casarrubias <t:@johncasarrubias>
     * @license MIT
     * @description This method will set an http request resolver.
     * 
     * Angular 2+ Http Resolver Example.
     * 
     * import { Component } from '@angular/core';
     * import { Http } from '@angular/http';
     * import { HTTPService, IRequest } from './sdk/services/core';
     * 
     * @Component(...)
     * export class App {
     * 
     *   constructor(private http: Http) {
     *     HTTPService.getInstance().setRequestResolver(<T>(request: IRequest) => {
     *       return this.http[request.method](request.path);
     *     })
     *   }
     * }
     */
    public setRequestResolver(request: <T>(request: IRequest) => Observable<T>): void {
        this.request = request;
    }
}
