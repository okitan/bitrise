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

export class V0AppFinishRespModel {
    'branchName'?: string;
    'buildTriggerToken'?: string;
    'isWebhookAutoRegSupported'?: boolean;
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "branchName",
            "baseName": "branch_name",
            "type": "string"
        },
        {
            "name": "buildTriggerToken",
            "baseName": "build_trigger_token",
            "type": "string"
        },
        {
            "name": "isWebhookAutoRegSupported",
            "baseName": "is_webhook_auto_reg_supported",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V0AppFinishRespModel.attributeTypeMap;
    }
}

