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

export class V0ArtifactResponseItemModel {
    'artifactMeta'?: string;
    'artifactType'?: string;
    'expiringDownloadUrl'?: string;
    'fileSizeBytes'?: number;
    'isPublicPageEnabled'?: boolean;
    'publicInstallPageUrl'?: string;
    'slug'?: string;
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "artifactMeta",
            "baseName": "artifact_meta",
            "type": "string"
        },
        {
            "name": "artifactType",
            "baseName": "artifact_type",
            "type": "string"
        },
        {
            "name": "expiringDownloadUrl",
            "baseName": "expiring_download_url",
            "type": "string"
        },
        {
            "name": "fileSizeBytes",
            "baseName": "file_size_bytes",
            "type": "number"
        },
        {
            "name": "isPublicPageEnabled",
            "baseName": "is_public_page_enabled",
            "type": "boolean"
        },
        {
            "name": "publicInstallPageUrl",
            "baseName": "public_install_page_url",
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
        return V0ArtifactResponseItemModel.attributeTypeMap;
    }
}

