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

export class V0ActivityEventResponseItemModel {
    'createdAt'?: string;
    'description'?: string;
    'eventIcon'?: string;
    'eventStype'?: string;
    'repositoryAvatarIconUrl'?: string;
    'repositoryTitle'?: string;
    'slug'?: string;
    'targetPathString'?: string;
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "eventIcon",
            "baseName": "event_icon",
            "type": "string"
        },
        {
            "name": "eventStype",
            "baseName": "event_stype",
            "type": "string"
        },
        {
            "name": "repositoryAvatarIconUrl",
            "baseName": "repository_avatar_icon_url",
            "type": "string"
        },
        {
            "name": "repositoryTitle",
            "baseName": "repository_title",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "targetPathString",
            "baseName": "target_path_string",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V0ActivityEventResponseItemModel.attributeTypeMap;
    }
}
