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
import { AddonsDeveloperLink } from './addonsDeveloperLink';
import { AddonsPlan } from './addonsPlan';
import { AddonsSetupGuide } from './addonsSetupGuide';

export class AddonsAddon {
    'bannerImage'?: string;
    'cardHeaderColors'?: Array<string>;
    'categories'?: Array<string>;
    'description'?: string;
    'developerLinks'?: Array<AddonsDeveloperLink>;
    'documentationUrl'?: string;
    'hasUi'?: boolean;
    'icon'?: string;
    'id'?: string;
    'isBeta'?: boolean;
    'plans'?: Array<AddonsPlan>;
    'platforms'?: Array<string>;
    'previewImages'?: Array<string>;
    'setupGuide'?: AddonsSetupGuide;
    'subtitle'?: string;
    'summary'?: string;
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bannerImage",
            "baseName": "banner_image",
            "type": "string"
        },
        {
            "name": "cardHeaderColors",
            "baseName": "card_header_colors",
            "type": "Array<string>"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "developerLinks",
            "baseName": "developer_links",
            "type": "Array<AddonsDeveloperLink>"
        },
        {
            "name": "documentationUrl",
            "baseName": "documentation_url",
            "type": "string"
        },
        {
            "name": "hasUi",
            "baseName": "has_ui",
            "type": "boolean"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isBeta",
            "baseName": "is_beta",
            "type": "boolean"
        },
        {
            "name": "plans",
            "baseName": "plans",
            "type": "Array<AddonsPlan>"
        },
        {
            "name": "platforms",
            "baseName": "platforms",
            "type": "Array<string>"
        },
        {
            "name": "previewImages",
            "baseName": "preview_images",
            "type": "Array<string>"
        },
        {
            "name": "setupGuide",
            "baseName": "setup_guide",
            "type": "AddonsSetupGuide"
        },
        {
            "name": "subtitle",
            "baseName": "subtitle",
            "type": "string"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddonsAddon.attributeTypeMap;
    }
}
