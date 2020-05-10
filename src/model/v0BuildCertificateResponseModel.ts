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
import { V0BuildCertificateResponseItemModel } from './v0BuildCertificateResponseItemModel';

export class V0BuildCertificateResponseModel {
    'data'?: V0BuildCertificateResponseItemModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "V0BuildCertificateResponseItemModel"
        }    ];

    static getAttributeTypeMap() {
        return V0BuildCertificateResponseModel.attributeTypeMap;
    }
}
