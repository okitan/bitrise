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

import { RequestFile } from '../api';
import { V0ActivityEventResponseItemModel } from './v0ActivityEventResponseItemModel';
import { V0PagingResponseModel } from './v0PagingResponseModel';

export class V0ActivityEventListResponseModel {
    'data'?: Array<V0ActivityEventResponseItemModel>;
    'paging'?: V0PagingResponseModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<V0ActivityEventResponseItemModel>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "V0PagingResponseModel"
        }    ];

    static getAttributeTypeMap() {
        return V0ActivityEventListResponseModel.attributeTypeMap;
    }
}

