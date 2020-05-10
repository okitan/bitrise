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
import { AddonsSetupInstruction } from './addonsSetupInstruction';

export class AddonsSetupGuide {
    'instructions'?: Array<AddonsSetupInstruction>;
    'notification'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instructions",
            "baseName": "instructions",
            "type": "Array<AddonsSetupInstruction>"
        },
        {
            "name": "notification",
            "baseName": "notification",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddonsSetupGuide.attributeTypeMap;
    }
}

