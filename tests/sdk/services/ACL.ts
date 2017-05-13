import { HTTPService, IHeaders } from "./core";
import { Observable } from "rxjs/Observable";
/**
 * @class ACLService
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description This TypeScript class provides services to interact through API services
 * with the model definition named 'ACL'.
 */
export class ACLService {
  private static instance: ACLService;
  /**
   * @method constructor
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description This ACLService class is a singleton
   * class, therfore no new instances are allowed and constructor is private.
   */
  private constructor(private http: HTTPService = HTTPService.getInstance()) {
  }
  /**
   * @method getInstance
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description This method will return a singleton instance from the
   * ACLService class.
   */
  public static getInstance(): ACLService {
    if (!ACLService.instance) {
      ACLService.instance = new ACLService();
    }
    return ACLService.instance;
  }
  /**
   * @method create<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Create a new instance of the model and persist it into the data source.
   */
  public create<T>(
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
        },
      },
      path: "/ACLs",
    });
  }
  /**
   * @method patchOrCreate<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Patch an existing model instance or insert a new one into the data source.
   */
  public patchOrCreate<T>(
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "patch",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
        },
      },
      path: "/ACLs",
    });
  }
  /**
   * @method replaceOrCreate__put_ACLs<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace an existing model instance or insert a new one into the data source.
   */
  public replaceOrCreate__put_ACLs<T>(
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "put",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
        },
      },
      path: "/ACLs",
    });
  }
  /**
   * @method find<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Find all instances of the model matched by filter from the data source.
   */
  public find<T>(
    filter?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
        },
        query: {
          filter,
        },
      },
      path: "/ACLs",
    });
  }
  /**
   * @method replaceOrCreate__post_ACLs_replaceOrCreate<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace an existing model instance or insert a new one into the data source.
   */
  public replaceOrCreate__post_ACLs_replaceOrCreate<T>(
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
        },
      },
      path: "/ACLs/replaceOrCreate",
    });
  }
  /**
   * @method upsertWithWhere<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Update an existing model instance or insert a new one into the data source based on the where criteria.
   */
  public upsertWithWhere<T>(
    where?: string,
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
          where,
        },
      },
      path: "/ACLs/upsertWithWhere",
    });
  }
  /**
   * @method exists__get_ACLs_id_exists<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Check whether a model instance exists in the data source.
   */
  public exists__get_ACLs_id_exists<T>(
    id: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}/exists",
    });
  }
  /**
   * @method exists__head_ACLs_id<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Check whether a model instance exists in the data source.
   */
  public exists__head_ACLs_id<T>(
    id: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "head",
      params: {
        body: {
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}",
    });
  }
  /**
   * @method findById<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Find a model instance by {{id}} from the data source.
   */
  public findById<T>(
    id: string,
    filter?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
          id,
        },
        query: {
          filter,
        },
      },
      path: "/ACLs/{id}",
    });
  }
  /**
   * @method replaceById__put_ACLs_id<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace attributes for a model instance and persist it into the data source.
   */
  public replaceById__put_ACLs_id<T>(
    id: string,
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "put",
      params: {
        body: {
          data,
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}",
    });
  }
  /**
   * @method deleteById<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Delete a model instance by {{id}} from the data source.
   */
  public deleteById<T>(
    id: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "delete",
      params: {
        body: {
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}",
    });
  }
  /**
   * @method patchAttributes<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Patch attributes for a model instance and persist it into the data source.
   */
  public patchAttributes<T>(
    id: string,
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "patch",
      params: {
        body: {
          data,
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}",
    });
  }
  /**
   * @method replaceById__post_ACLs_id_replace<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace attributes for a model instance and persist it into the data source.
   */
  public replaceById__post_ACLs_id_replace<T>(
    id: string,
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          data,
        },
        path: {
          id,
        },
        query: {
        },
      },
      path: "/ACLs/{id}/replace",
    });
  }
  /**
   * @method findOne<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Find first instance of the model matched by filter from the data source.
   */
  public findOne<T>(
    filter?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
        },
        query: {
          filter,
        },
      },
      path: "/ACLs/findOne",
    });
  }
  /**
   * @method updateAll<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Update instances of the model matched by {{where}} from the data source.
   */
  public updateAll<T>(
    where?: string,
    data?: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          data,
        },
        path: {
        },
        query: {
          where,
        },
      },
      path: "/ACLs/update",
    });
  }
  /**
   * @method count<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Count instances of the model matched by where from the data source.
   */
  public count<T>(
    where?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
        },
        query: {
          where,
        },
      },
      path: "/ACLs/count",
    });
  }
  /**
   * @method createChangeStream__post_ACLs_change_stream<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Create a change stream.
   */
  public createChangeStream__post_ACLs_change_stream<T>(
    options?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
        },
        path: {
        },
        query: {
        },
      },
      path: "/ACLs/change-stream",
    });
  }
  /**
   * @method createChangeStream__get_ACLs_change_stream<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Create a change stream.
   */
  public createChangeStream__get_ACLs_change_stream<T>(
    options?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "get",
      params: {
        body: {
        },
        path: {
        },
        query: {
          options,
        },
      },
      path: "/ACLs/change-stream",
    });
  }
}
