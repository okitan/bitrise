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
import { AddonsFeature } from './addonsFeature';

export class AddonsPlan {
    'features'?: Array<AddonsFeature>;
    'id'?: string;
    'name'?: string;
    'price'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<AddonsFeature>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AddonsPlan.attributeTypeMap;
    }
}

