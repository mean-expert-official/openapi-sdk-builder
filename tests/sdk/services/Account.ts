import { HTTPService, IHeaders } from "./core";
import { Observable } from "rxjs/Observable";
/**
 * @class AccountService
 * @author Jonathan Casarrubias <t:@johncasarrubias>
 * @license MIT
 * @description This TypeScript class provides services to interact through API services
 * with the model definition named 'Account'.
 */
export class AccountService {
  private static instance: AccountService;
  /**
   * @method constructor
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description This AccountService class is a singleton
   * class, therfore no new instances are allowed and constructor is private.
   */
  private constructor(private http: HTTPService = HTTPService.getInstance()) {
  }
  /**
   * @method getInstance
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description This method will return a singleton instance from the
   * AccountService class.
   */
  public static getInstance(): AccountService {
    if (!AccountService.instance) {
      AccountService.instance = new AccountService();
    }
    return AccountService.instance;
  }
  /**
   * @method __findById__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Find a related item by id for accessTokens.
   */
  public __findById__accessTokens<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/accessTokens/{fk}",
    });
  }
  /**
   * @method __destroyById__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Delete a related item by id for accessTokens.
   */
  public __destroyById__accessTokens<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/accessTokens/{fk}",
    });
  }
  /**
   * @method __updateById__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Update a related item by id for accessTokens.
   */
  public __updateById__accessTokens<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/accessTokens/{fk}",
    });
  }
  /**
   * @method __findById__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Find a related item by id for roles.
   */
  public __findById__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/{fk}",
    });
  }
  /**
   * @method __destroyById__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Delete a related item by id for roles.
   */
  public __destroyById__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/{fk}",
    });
  }
  /**
   * @method __updateById__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Update a related item by id for roles.
   */
  public __updateById__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/{fk}",
    });
  }
  /**
   * @method __link__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Add a related item by id for roles.
   */
  public __link__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/rel/{fk}",
    });
  }
  /**
   * @method __unlink__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Remove the roles relation to an item by id.
   */
  public __unlink__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/rel/{fk}",
    });
  }
  /**
   * @method __exists__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Check the existence of roles relation to an item by id.
   */
  public __exists__roles<T>(
    id: string,
    fk: string,
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
          fk,
        },
        query: {
        },
      },
      path: "/Accounts/{id}/roles/rel/{fk}",
    });
  }
  /**
   * @method __get__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Queries accessTokens of Account.
   */
  public __get__accessTokens<T>(
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
      path: "/Accounts/{id}/accessTokens",
    });
  }
  /**
   * @method __create__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Creates a new instance in accessTokens of this model.
   */
  public __create__accessTokens<T>(
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
      path: "/Accounts/{id}/accessTokens",
    });
  }
  /**
   * @method __delete__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Deletes all accessTokens of this model.
   */
  public __delete__accessTokens<T>(
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
      path: "/Accounts/{id}/accessTokens",
    });
  }
  /**
   * @method __count__accessTokens<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Counts accessTokens of Account.
   */
  public __count__accessTokens<T>(
    id: string,
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
          id,
        },
        query: {
          where,
        },
      },
      path: "/Accounts/{id}/accessTokens/count",
    });
  }
  /**
   * @method __get__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Queries roles of Account.
   */
  public __get__roles<T>(
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
      path: "/Accounts/{id}/roles",
    });
  }
  /**
   * @method __create__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Creates a new instance in roles of this model.
   */
  public __create__roles<T>(
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
      path: "/Accounts/{id}/roles",
    });
  }
  /**
   * @method __delete__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Deletes all roles of this model.
   */
  public __delete__roles<T>(
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
      path: "/Accounts/{id}/roles",
    });
  }
  /**
   * @method __count__roles<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Counts roles of Account.
   */
  public __count__roles<T>(
    id: string,
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
          id,
        },
        query: {
          where,
        },
      },
      path: "/Accounts/{id}/roles/count",
    });
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
      path: "/Accounts",
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
      path: "/Accounts",
    });
  }
  /**
   * @method replaceOrCreate__put_Accounts<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace an existing model instance or insert a new one into the data source.
   */
  public replaceOrCreate__put_Accounts<T>(
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
      path: "/Accounts",
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
      path: "/Accounts",
    });
  }
  /**
   * @method replaceOrCreate__post_Accounts_replaceOrCreate<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace an existing model instance or insert a new one into the data source.
   */
  public replaceOrCreate__post_Accounts_replaceOrCreate<T>(
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
      path: "/Accounts/replaceOrCreate",
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
      path: "/Accounts/upsertWithWhere",
    });
  }
  /**
   * @method exists__get_Accounts_id_exists<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Check whether a model instance exists in the data source.
   */
  public exists__get_Accounts_id_exists<T>(
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
      path: "/Accounts/{id}/exists",
    });
  }
  /**
   * @method exists__head_Accounts_id<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Check whether a model instance exists in the data source.
   */
  public exists__head_Accounts_id<T>(
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
      path: "/Accounts/{id}",
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
      path: "/Accounts/{id}",
    });
  }
  /**
   * @method replaceById__put_Accounts_id<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace attributes for a model instance and persist it into the data source.
   */
  public replaceById__put_Accounts_id<T>(
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
      path: "/Accounts/{id}",
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
      path: "/Accounts/{id}",
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
      path: "/Accounts/{id}",
    });
  }
  /**
   * @method replaceById__post_Accounts_id_replace<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Replace attributes for a model instance and persist it into the data source.
   */
  public replaceById__post_Accounts_id_replace<T>(
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
      path: "/Accounts/{id}/replace",
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
      path: "/Accounts/findOne",
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
      path: "/Accounts/update",
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
      path: "/Accounts/count",
    });
  }
  /**
   * @method createChangeStream__post_Accounts_change_stream<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Create a change stream.
   */
  public createChangeStream__post_Accounts_change_stream<T>(
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
      path: "/Accounts/change-stream",
    });
  }
  /**
   * @method createChangeStream__get_Accounts_change_stream<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Create a change stream.
   */
  public createChangeStream__get_Accounts_change_stream<T>(
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
      path: "/Accounts/change-stream",
    });
  }
  /**
   * @method login<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Login a user with username/email and password.
   */
  public login<T>(
    credentials: any,
    include?: string,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          credentials,
        },
        path: {
        },
        query: {
          include,
        },
      },
      path: "/Accounts/login",
    });
  }
  /**
   * @method logout<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Logout a user with access token.
   */
  public logout<T>(
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
      path: "/Accounts/logout",
    });
  }
  /**
   * @method confirm<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Confirm a user registration with email verification token.
   */
  public confirm<T>(
    uid: string,
    token: string,
    redirect?: string,
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
          uid,
          token,
          redirect,
        },
      },
      path: "/Accounts/confirm",
    });
  }
  /**
   * @method resetPassword<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Reset password for a user with email.
   */
  public resetPassword<T>(
    options: any,
    headers?: IHeaders
  ): Observable<T> {
    return this.http.request<T>({
      headers: headers,
      method: "post",
      params: {
        body: {
          options,
        },
        path: {
        },
        query: {
        },
      },
      path: "/Accounts/reset",
    });
  }
  /**
   * @method changePassword<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Change a user's password.
   */
  public changePassword<T>(
    oldPassword: string,
    newPassword: string,
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
      path: "/Accounts/change-password",
    });
  }
  /**
   * @method myRemote<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * undefined
   */
  public myRemote<T>(
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
        },
      },
      path: "/Accounts/my-remote",
    });
  }
  /**
   * @method stats<T>
   * @author Jonathan Casarrubias <t:@johncasarrubias>
   * @license MIT
   * @description
   * Statistical information for Account registers.
   */
  public stats<T>(
    range: string,
    custom?: string,
    where?: string,
    groupBy?: string,
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
          range,
          custom,
          where,
          groupBy,
        },
      },
      path: "/Accounts/stats",
    });
  }
}
