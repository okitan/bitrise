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
import { V0AppAddOnResponseItemModel } from './v0AppAddOnResponseItemModel';

export class V0AppAddOnsListResponseModel {
    'data'?: Array<V0AppAddOnResponseItemModel>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<V0AppAddOnResponseItemModel>"
        }    ];

    static getAttributeTypeMap() {
        return V0AppAddOnsListResponseModel.attributeTypeMap;
    }
}
