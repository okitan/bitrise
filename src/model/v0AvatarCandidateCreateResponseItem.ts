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

export class V0AvatarCandidateCreateResponseItem {
    'filename'?: string;
    'filesize'?: number;
    'slug'?: string;
    'uploadUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "filesize",
            "baseName": "filesize",
            "type": "number"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "uploadUrl",
            "baseName": "upload_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V0AvatarCandidateCreateResponseItem.attributeTypeMap;
    }
}
