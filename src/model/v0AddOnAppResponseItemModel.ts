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
import { AddonsPlan } from './addonsPlan';

export class V0AddOnAppResponseItemModel {
    'icon'?: string;
    'plan'?: AddonsPlan;
    'planStartedAt'?: string;
    'slug'?: string;
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "AddonsPlan"
        },
        {
            "name": "planStartedAt",
            "baseName": "plan_started_at",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V0AddOnAppResponseItemModel.attributeTypeMap;
    }
}

