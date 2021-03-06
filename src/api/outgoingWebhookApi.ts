/**
 * Bitrise API
 * Official REST API for Bitrise.io
 *
 * The version of the OpenAPI document: 0.1
 * Contact: letsconnect@bitrise.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { ServiceStandardErrorRespModel } from '../model/serviceStandardErrorRespModel';
import { V0AppWebhookCreateParams } from '../model/v0AppWebhookCreateParams';
import { V0AppWebhookCreatedResponseModel } from '../model/v0AppWebhookCreatedResponseModel';
import { V0AppWebhookDeletedResponseModel } from '../model/v0AppWebhookDeletedResponseModel';
import { V0AppWebhookListResponseModel } from '../model/v0AppWebhookListResponseModel';
import { V0AppWebhookResponseModel } from '../model/v0AppWebhookResponseModel';
import { V0AppWebhookUpdateParams } from '../model/v0AppWebhookUpdateParams';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.bitrise.io/v0.1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OutgoingWebhookApiApiKeys {
    AddonAuthToken,
    PersonalAccessToken,
}

export class OutgoingWebhookApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'AddonAuthToken': new ApiKeyAuth('header', 'Bitrise-Addon-Auth-Token'),
        'PersonalAccessToken': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: OutgoingWebhookApiApiKeys, value: string) {
        (this.authentications as any)[OutgoingWebhookApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Create an outgoing webhook for a specified Bitrise app: this can be used to send build events to a specified URL with custom headers. Currently, only build events can trigger outgoing webhooks.
     * @summary Create an outgoing webhook for an app
     * @param appSlug App slug
     * @param appWebhookCreateParams App webhook creation params
     */
    public async outgoingWebhookCreate (appSlug: string, appWebhookCreateParams: V0AppWebhookCreateParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: V0AppWebhookCreatedResponseModel;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/outgoing-webhooks'
            .replace('{' + 'app-slug' + '}', encodeURIComponent(String(appSlug)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'appSlug' is not null or undefined
        if (appSlug === null || appSlug === undefined) {
            throw new Error('Required parameter appSlug was null or undefined when calling outgoingWebhookCreate.');
        }

        // verify required parameter 'appWebhookCreateParams' is not null or undefined
        if (appWebhookCreateParams === null || appWebhookCreateParams === undefined) {
            throw new Error('Required parameter appWebhookCreateParams was null or undefined when calling outgoingWebhookCreate.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(appWebhookCreateParams, "V0AppWebhookCreateParams")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AddonAuthToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AddonAuthToken.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.PersonalAccessToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.PersonalAccessToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V0AppWebhookCreatedResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0AppWebhookCreatedResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete an existing outgoing webhook for a specified Bitrise app.
     * @summary Delete an outgoing webhook of an app
     * @param appSlug App slug
     * @param appWebhookSlug App webhook slug
     */
    public async outgoingWebhookDelete (appSlug: string, appWebhookSlug: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: V0AppWebhookDeletedResponseModel;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}'
            .replace('{' + 'app-slug' + '}', encodeURIComponent(String(appSlug)))
            .replace('{' + 'app-webhook-slug' + '}', encodeURIComponent(String(appWebhookSlug)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'appSlug' is not null or undefined
        if (appSlug === null || appSlug === undefined) {
            throw new Error('Required parameter appSlug was null or undefined when calling outgoingWebhookDelete.');
        }

        // verify required parameter 'appWebhookSlug' is not null or undefined
        if (appWebhookSlug === null || appWebhookSlug === undefined) {
            throw new Error('Required parameter appWebhookSlug was null or undefined when calling outgoingWebhookDelete.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.PersonalAccessToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.PersonalAccessToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V0AppWebhookDeletedResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0AppWebhookDeletedResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the outgoing webhooks registered for a specified Bitrise app. This returns all the relevant data of the webhook, including the slug of the webhook and its URL.
     * @summary List the outgoing webhooks of an app
     * @param appSlug App slug
     * @param next Slug of the first webhook in the response
     * @param limit Max number of elements per page (default: 50)
     */
    public async outgoingWebhookList (appSlug: string, next?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: V0AppWebhookListResponseModel;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/outgoing-webhooks'
            .replace('{' + 'app-slug' + '}', encodeURIComponent(String(appSlug)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'appSlug' is not null or undefined
        if (appSlug === null || appSlug === undefined) {
            throw new Error('Required parameter appSlug was null or undefined when calling outgoingWebhookList.');
        }

        if (next !== undefined) {
            localVarQueryParameters['next'] = ObjectSerializer.serialize(next, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AddonAuthToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AddonAuthToken.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.PersonalAccessToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.PersonalAccessToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V0AppWebhookListResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0AppWebhookListResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update an existing outgoing webhook (URL, events, secrets and headers) for a specified Bitrise app. Even if you do not want to change one of the parameters, you still have to provide that parameter as well: simply use its existing value.
     * @summary Update an outgoing webhook of an app
     * @param appSlug App slug
     * @param appWebhookSlug App webhook slug
     * @param appWebhookUpdateParams App webhook update params
     */
    public async outgoingWebhookUpdate (appSlug: string, appWebhookSlug: string, appWebhookUpdateParams: V0AppWebhookUpdateParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: V0AppWebhookResponseModel;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/outgoing-webhooks/{app-webhook-slug}'
            .replace('{' + 'app-slug' + '}', encodeURIComponent(String(appSlug)))
            .replace('{' + 'app-webhook-slug' + '}', encodeURIComponent(String(appWebhookSlug)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'appSlug' is not null or undefined
        if (appSlug === null || appSlug === undefined) {
            throw new Error('Required parameter appSlug was null or undefined when calling outgoingWebhookUpdate.');
        }

        // verify required parameter 'appWebhookSlug' is not null or undefined
        if (appWebhookSlug === null || appWebhookSlug === undefined) {
            throw new Error('Required parameter appWebhookSlug was null or undefined when calling outgoingWebhookUpdate.');
        }

        // verify required parameter 'appWebhookUpdateParams' is not null or undefined
        if (appWebhookUpdateParams === null || appWebhookUpdateParams === undefined) {
            throw new Error('Required parameter appWebhookUpdateParams was null or undefined when calling outgoingWebhookUpdate.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(appWebhookUpdateParams, "V0AppWebhookUpdateParams")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.PersonalAccessToken.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.PersonalAccessToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: V0AppWebhookResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0AppWebhookResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
