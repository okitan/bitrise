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
import { V0WebhookDeliveryItemResponseModel } from './v0WebhookDeliveryItemResponseModel';

export class V0WebhookDeliveryItemShowResponseModel {
    'data'?: V0WebhookDeliveryItemResponseModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "V0WebhookDeliveryItemResponseModel"
        }    ];

    static getAttributeTypeMap() {
        return V0WebhookDeliveryItemShowResponseModel.attributeTypeMap;
    }
}

