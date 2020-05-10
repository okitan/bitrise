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

export class V0PagingResponseModel {
    /**
    * Next is the \"anchor\" for pagination. This value should be passed to the same endpoint to get the next page. Empty/not included if there\'s no \"next\" page. Stop paging when there\'s no \"Next\" item in the response!
    */
    'next'?: string;
    /**
    * PageItemLimit - per-page item count. A given page might include less items if there\'s not enough items. This value is the \"max item count per page\".
    */
    'pageItemLimit'?: number;
    /**
    * TotalItemCount - total item count, through \"all pages\"
    */
    'totalItemCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "pageItemLimit",
            "baseName": "page_item_limit",
            "type": "number"
        },
        {
            "name": "totalItemCount",
            "baseName": "total_item_count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V0PagingResponseModel.attributeTypeMap;
    }
}
