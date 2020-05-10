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
import { V0AvatarCandidateCreateParams } from '../model/v0AvatarCandidateCreateParams';
import { V0AvatarCandidateCreateResponseItem } from '../model/v0AvatarCandidateCreateResponseItem';
import { V0AvatarPromoteParams } from '../model/v0AvatarPromoteParams';
import { V0AvatarPromoteResponseModel } from '../model/v0AvatarPromoteResponseModel';
import { V0FindAvatarCandidateResponse } from '../model/v0FindAvatarCandidateResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.bitrise.io/v0.1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AvatarCandidateApiApiKeys {
    PersonalAccessToken,
}

export class AvatarCandidateApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
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

    public setApiKey(key: AvatarCandidateApiApiKeys, value: string) {
        (this.authentications as any)[AvatarCandidateApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Add new avatar candidates to a specific app
     * @summary Create avatar candidates
     * @param appSlug App slug
     * @param avatarCandidate Avatar candidate parameters
     */
    public async avatarCandidateCreate (appSlug: string, avatarCandidate: Array<V0AvatarCandidateCreateParams>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<V0AvatarCandidateCreateResponseItem>;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/avatar-candidates'
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
            throw new Error('Required parameter appSlug was null or undefined when calling avatarCandidateCreate.');
        }

        // verify required parameter 'avatarCandidate' is not null or undefined
        if (avatarCandidate === null || avatarCandidate === undefined) {
            throw new Error('Required parameter avatarCandidate was null or undefined when calling avatarCandidateCreate.');
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
            body: ObjectSerializer.serialize(avatarCandidate, "Array<V0AvatarCandidateCreateParams>")
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
            return new Promise<{ response: http.ClientResponse; body: Array<V0AvatarCandidateCreateResponseItem>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<V0AvatarCandidateCreateResponseItem>");
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
     * List all available avatar candidates for an application
     * @summary Get list of the avatar candidates
     * @param appSlug App slug
     */
    public async avatarCandidateList (appSlug: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: V0FindAvatarCandidateResponse;  }> {
        const localVarPath = this.basePath + '/v0.1/apps/{app-slug}/avatar-candidates'
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
            throw new Error('Required parameter appSlug was null or undefined when calling avatarCandidateList.');
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
            return new Promise<{ response: http.ClientResponse; body: V0FindAvatarCandidateResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0FindAvatarCandidateResponse");
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
     * Promotes an avatar candidate for an app
     * @summary Promote an avatar candidate
     * @param appSlug App slug
     * @param avatarSlug Avatar candidate slug
     * @param avatarPromoteParams Avatar promote parameters
     */
    public async avatarCandidatePromote (appSlug: string, avatarSlug: string, avatarPromoteParams: V0AvatarPromoteParams, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: V0AvatarPromoteResponseModel;  }> {
        const localVarPath = this.basePath + '/apps/{app-slug}/avatar-candidates/{avatar-slug}'
            .replace('{' + 'app-slug' + '}', encodeURIComponent(String(appSlug)))
            .replace('{' + 'avatar-slug' + '}', encodeURIComponent(String(avatarSlug)));
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
            throw new Error('Required parameter appSlug was null or undefined when calling avatarCandidatePromote.');
        }

        // verify required parameter 'avatarSlug' is not null or undefined
        if (avatarSlug === null || avatarSlug === undefined) {
            throw new Error('Required parameter avatarSlug was null or undefined when calling avatarCandidatePromote.');
        }

        // verify required parameter 'avatarPromoteParams' is not null or undefined
        if (avatarPromoteParams === null || avatarPromoteParams === undefined) {
            throw new Error('Required parameter avatarPromoteParams was null or undefined when calling avatarCandidatePromote.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(avatarPromoteParams, "V0AvatarPromoteParams")
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
            return new Promise<{ response: http.ClientResponse; body: V0AvatarPromoteResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "V0AvatarPromoteResponseModel");
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
