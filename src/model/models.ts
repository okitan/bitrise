export * from './addonsAddon';
export * from './addonsDeveloperLink';
export * from './addonsFeature';
export * from './addonsPlan';
export * from './addonsSetupGuide';
export * from './addonsSetupInstruction';
export * from './serviceStandardErrorRespModel';
export * from './v0ActivityEventListResponseModel';
export * from './v0ActivityEventResponseItemModel';
export * from './v0AddOnAppResponseItemModel';
export * from './v0AddonsListResponseModel';
export * from './v0AddonsShowResponseModel';
export * from './v0AndroidKeystoreFileUploadParams';
export * from './v0AppAddOnResponseItemModel';
export * from './v0AppAddOnsListResponseModel';
export * from './v0AppConfigRequestParam';
export * from './v0AppFinishParams';
export * from './v0AppFinishRespModel';
export * from './v0AppListResponseModel';
export * from './v0AppRespModel';
export * from './v0AppResponseItemModel';
export * from './v0AppShowResponseModel';
export * from './v0AppUploadParams';
export * from './v0AppWebhookCreateParams';
export * from './v0AppWebhookCreatedResponseModel';
export * from './v0AppWebhookDeletedResponseModel';
export * from './v0AppWebhookListResponseModel';
export * from './v0AppWebhookResponseItemModel';
export * from './v0AppWebhookResponseModel';
export * from './v0AppWebhookUpdateParams';
export * from './v0AppleAPICredentialResponseItem';
export * from './v0AppleAPICredentialsListResponse';
export * from './v0ArtifactDeleteResponseModel';
export * from './v0ArtifactListElementResponseModel';
export * from './v0ArtifactListResponseModel';
export * from './v0ArtifactResponseItemModel';
export * from './v0ArtifactShowResponseModel';
export * from './v0ArtifactUpdateParams';
export * from './v0AvatarCandidateCreateParams';
export * from './v0AvatarCandidateCreateResponseItem';
export * from './v0AvatarPromoteParams';
export * from './v0AvatarPromoteResponseItemModel';
export * from './v0AvatarPromoteResponseModel';
export * from './v0BranchListResponseModel';
export * from './v0BuildAbortParams';
export * from './v0BuildAbortResponseModel';
export * from './v0BuildCertificateListResponseModel';
export * from './v0BuildCertificateResponseItemModel';
export * from './v0BuildCertificateResponseModel';
export * from './v0BuildCertificateUpdateParams';
export * from './v0BuildCertificateUploadParams';
export * from './v0BuildListAllResponseItemModel';
export * from './v0BuildListAllResponseModel';
export * from './v0BuildListResponseModel';
export * from './v0BuildLogChunkItemResponseModel';
export * from './v0BuildLogInfoResponseModel';
export * from './v0BuildParamsEnvironment';
export * from './v0BuildRequestListResponseModel';
export * from './v0BuildRequestResponseItemModel';
export * from './v0BuildRequestUpdateParams';
export * from './v0BuildRequestUpdateResponseModel';
export * from './v0BuildResponseItemModel';
export * from './v0BuildShowResponseModel';
export * from './v0BuildTriggerParams';
export * from './v0BuildTriggerParamsBuildParams';
export * from './v0BuildTriggerParamsHookInfo';
export * from './v0BuildTriggerRespModel';
export * from './v0BuildWorkflowListResponseModel';
export * from './v0CommitPaths';
export * from './v0FindAvatarCandidateResponse';
export * from './v0FindAvatarCandidateResponseItem';
export * from './v0OrganizationDataModel';
export * from './v0OrganizationListRespModel';
export * from './v0OrganizationOwner';
export * from './v0OrganizationRespModel';
export * from './v0OwnerAccountResponseModel';
export * from './v0OwnerAddOnResponseItemModel';
export * from './v0OwnerAddOnsListResponseModel';
export * from './v0PagingResponseModel';
export * from './v0PlanDataModel';
export * from './v0ProjectFileStorageDocumentUpdateParams';
export * from './v0ProjectFileStorageListResponseModel';
export * from './v0ProjectFileStorageResponseItemModel';
export * from './v0ProjectFileStorageResponseModel';
export * from './v0ProjectFileStorageUploadParams';
export * from './v0ProvProfileDocumentUpdateParams';
export * from './v0ProvisionProfileListResponseModel';
export * from './v0ProvisionProfileResponseItemModel';
export * from './v0ProvisionProfileResponseModel';
export * from './v0ProvisionProfileUploadParams';
export * from './v0SSHKeyRespModel';
export * from './v0SSHKeyUploadParams';
export * from './v0TestDeviceListResponseModel';
export * from './v0TestDeviceResponseItemModel';
export * from './v0UserPlanDataModel';
export * from './v0UserPlanRespModel';
export * from './v0UserProfileDataModel';
export * from './v0UserProfileRespModel';
export * from './v0WebhookDeliveryItemResponseModel';
export * from './v0WebhookDeliveryItemShowResponseModel';
export * from './v0WebhookRespModel';

import localVarRequest = require('request');

import { AddonsAddon } from './addonsAddon';
import { AddonsDeveloperLink } from './addonsDeveloperLink';
import { AddonsFeature } from './addonsFeature';
import { AddonsPlan } from './addonsPlan';
import { AddonsSetupGuide } from './addonsSetupGuide';
import { AddonsSetupInstruction } from './addonsSetupInstruction';
import { ServiceStandardErrorRespModel } from './serviceStandardErrorRespModel';
import { V0ActivityEventListResponseModel } from './v0ActivityEventListResponseModel';
import { V0ActivityEventResponseItemModel } from './v0ActivityEventResponseItemModel';
import { V0AddOnAppResponseItemModel } from './v0AddOnAppResponseItemModel';
import { V0AddonsListResponseModel } from './v0AddonsListResponseModel';
import { V0AddonsShowResponseModel } from './v0AddonsShowResponseModel';
import { V0AndroidKeystoreFileUploadParams } from './v0AndroidKeystoreFileUploadParams';
import { V0AppAddOnResponseItemModel } from './v0AppAddOnResponseItemModel';
import { V0AppAddOnsListResponseModel } from './v0AppAddOnsListResponseModel';
import { V0AppConfigRequestParam } from './v0AppConfigRequestParam';
import { V0AppFinishParams } from './v0AppFinishParams';
import { V0AppFinishRespModel } from './v0AppFinishRespModel';
import { V0AppListResponseModel } from './v0AppListResponseModel';
import { V0AppRespModel } from './v0AppRespModel';
import { V0AppResponseItemModel } from './v0AppResponseItemModel';
import { V0AppShowResponseModel } from './v0AppShowResponseModel';
import { V0AppUploadParams } from './v0AppUploadParams';
import { V0AppWebhookCreateParams } from './v0AppWebhookCreateParams';
import { V0AppWebhookCreatedResponseModel } from './v0AppWebhookCreatedResponseModel';
import { V0AppWebhookDeletedResponseModel } from './v0AppWebhookDeletedResponseModel';
import { V0AppWebhookListResponseModel } from './v0AppWebhookListResponseModel';
import { V0AppWebhookResponseItemModel } from './v0AppWebhookResponseItemModel';
import { V0AppWebhookResponseModel } from './v0AppWebhookResponseModel';
import { V0AppWebhookUpdateParams } from './v0AppWebhookUpdateParams';
import { V0AppleAPICredentialResponseItem } from './v0AppleAPICredentialResponseItem';
import { V0AppleAPICredentialsListResponse } from './v0AppleAPICredentialsListResponse';
import { V0ArtifactDeleteResponseModel } from './v0ArtifactDeleteResponseModel';
import { V0ArtifactListElementResponseModel } from './v0ArtifactListElementResponseModel';
import { V0ArtifactListResponseModel } from './v0ArtifactListResponseModel';
import { V0ArtifactResponseItemModel } from './v0ArtifactResponseItemModel';
import { V0ArtifactShowResponseModel } from './v0ArtifactShowResponseModel';
import { V0ArtifactUpdateParams } from './v0ArtifactUpdateParams';
import { V0AvatarCandidateCreateParams } from './v0AvatarCandidateCreateParams';
import { V0AvatarCandidateCreateResponseItem } from './v0AvatarCandidateCreateResponseItem';
import { V0AvatarPromoteParams } from './v0AvatarPromoteParams';
import { V0AvatarPromoteResponseItemModel } from './v0AvatarPromoteResponseItemModel';
import { V0AvatarPromoteResponseModel } from './v0AvatarPromoteResponseModel';
import { V0BranchListResponseModel } from './v0BranchListResponseModel';
import { V0BuildAbortParams } from './v0BuildAbortParams';
import { V0BuildAbortResponseModel } from './v0BuildAbortResponseModel';
import { V0BuildCertificateListResponseModel } from './v0BuildCertificateListResponseModel';
import { V0BuildCertificateResponseItemModel } from './v0BuildCertificateResponseItemModel';
import { V0BuildCertificateResponseModel } from './v0BuildCertificateResponseModel';
import { V0BuildCertificateUpdateParams } from './v0BuildCertificateUpdateParams';
import { V0BuildCertificateUploadParams } from './v0BuildCertificateUploadParams';
import { V0BuildListAllResponseItemModel } from './v0BuildListAllResponseItemModel';
import { V0BuildListAllResponseModel } from './v0BuildListAllResponseModel';
import { V0BuildListResponseModel } from './v0BuildListResponseModel';
import { V0BuildLogChunkItemResponseModel } from './v0BuildLogChunkItemResponseModel';
import { V0BuildLogInfoResponseModel } from './v0BuildLogInfoResponseModel';
import { V0BuildParamsEnvironment } from './v0BuildParamsEnvironment';
import { V0BuildRequestListResponseModel } from './v0BuildRequestListResponseModel';
import { V0BuildRequestResponseItemModel } from './v0BuildRequestResponseItemModel';
import { V0BuildRequestUpdateParams } from './v0BuildRequestUpdateParams';
import { V0BuildRequestUpdateResponseModel } from './v0BuildRequestUpdateResponseModel';
import { V0BuildResponseItemModel } from './v0BuildResponseItemModel';
import { V0BuildShowResponseModel } from './v0BuildShowResponseModel';
import { V0BuildTriggerParams } from './v0BuildTriggerParams';
import { V0BuildTriggerParamsBuildParams } from './v0BuildTriggerParamsBuildParams';
import { V0BuildTriggerParamsHookInfo } from './v0BuildTriggerParamsHookInfo';
import { V0BuildTriggerRespModel } from './v0BuildTriggerRespModel';
import { V0BuildWorkflowListResponseModel } from './v0BuildWorkflowListResponseModel';
import { V0CommitPaths } from './v0CommitPaths';
import { V0FindAvatarCandidateResponse } from './v0FindAvatarCandidateResponse';
import { V0FindAvatarCandidateResponseItem } from './v0FindAvatarCandidateResponseItem';
import { V0OrganizationDataModel } from './v0OrganizationDataModel';
import { V0OrganizationListRespModel } from './v0OrganizationListRespModel';
import { V0OrganizationOwner } from './v0OrganizationOwner';
import { V0OrganizationRespModel } from './v0OrganizationRespModel';
import { V0OwnerAccountResponseModel } from './v0OwnerAccountResponseModel';
import { V0OwnerAddOnResponseItemModel } from './v0OwnerAddOnResponseItemModel';
import { V0OwnerAddOnsListResponseModel } from './v0OwnerAddOnsListResponseModel';
import { V0PagingResponseModel } from './v0PagingResponseModel';
import { V0PlanDataModel } from './v0PlanDataModel';
import { V0ProjectFileStorageDocumentUpdateParams } from './v0ProjectFileStorageDocumentUpdateParams';
import { V0ProjectFileStorageListResponseModel } from './v0ProjectFileStorageListResponseModel';
import { V0ProjectFileStorageResponseItemModel } from './v0ProjectFileStorageResponseItemModel';
import { V0ProjectFileStorageResponseModel } from './v0ProjectFileStorageResponseModel';
import { V0ProjectFileStorageUploadParams } from './v0ProjectFileStorageUploadParams';
import { V0ProvProfileDocumentUpdateParams } from './v0ProvProfileDocumentUpdateParams';
import { V0ProvisionProfileListResponseModel } from './v0ProvisionProfileListResponseModel';
import { V0ProvisionProfileResponseItemModel } from './v0ProvisionProfileResponseItemModel';
import { V0ProvisionProfileResponseModel } from './v0ProvisionProfileResponseModel';
import { V0ProvisionProfileUploadParams } from './v0ProvisionProfileUploadParams';
import { V0SSHKeyRespModel } from './v0SSHKeyRespModel';
import { V0SSHKeyUploadParams } from './v0SSHKeyUploadParams';
import { V0TestDeviceListResponseModel } from './v0TestDeviceListResponseModel';
import { V0TestDeviceResponseItemModel } from './v0TestDeviceResponseItemModel';
import { V0UserPlanDataModel } from './v0UserPlanDataModel';
import { V0UserPlanRespModel } from './v0UserPlanRespModel';
import { V0UserProfileDataModel } from './v0UserProfileDataModel';
import { V0UserProfileRespModel } from './v0UserProfileRespModel';
import { V0WebhookDeliveryItemResponseModel } from './v0WebhookDeliveryItemResponseModel';
import { V0WebhookDeliveryItemShowResponseModel } from './v0WebhookDeliveryItemShowResponseModel';
import { V0WebhookRespModel } from './v0WebhookRespModel';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "AddonsAddon": AddonsAddon,
    "AddonsDeveloperLink": AddonsDeveloperLink,
    "AddonsFeature": AddonsFeature,
    "AddonsPlan": AddonsPlan,
    "AddonsSetupGuide": AddonsSetupGuide,
    "AddonsSetupInstruction": AddonsSetupInstruction,
    "ServiceStandardErrorRespModel": ServiceStandardErrorRespModel,
    "V0ActivityEventListResponseModel": V0ActivityEventListResponseModel,
    "V0ActivityEventResponseItemModel": V0ActivityEventResponseItemModel,
    "V0AddOnAppResponseItemModel": V0AddOnAppResponseItemModel,
    "V0AddonsListResponseModel": V0AddonsListResponseModel,
    "V0AddonsShowResponseModel": V0AddonsShowResponseModel,
    "V0AndroidKeystoreFileUploadParams": V0AndroidKeystoreFileUploadParams,
    "V0AppAddOnResponseItemModel": V0AppAddOnResponseItemModel,
    "V0AppAddOnsListResponseModel": V0AppAddOnsListResponseModel,
    "V0AppConfigRequestParam": V0AppConfigRequestParam,
    "V0AppFinishParams": V0AppFinishParams,
    "V0AppFinishRespModel": V0AppFinishRespModel,
    "V0AppListResponseModel": V0AppListResponseModel,
    "V0AppRespModel": V0AppRespModel,
    "V0AppResponseItemModel": V0AppResponseItemModel,
    "V0AppShowResponseModel": V0AppShowResponseModel,
    "V0AppUploadParams": V0AppUploadParams,
    "V0AppWebhookCreateParams": V0AppWebhookCreateParams,
    "V0AppWebhookCreatedResponseModel": V0AppWebhookCreatedResponseModel,
    "V0AppWebhookDeletedResponseModel": V0AppWebhookDeletedResponseModel,
    "V0AppWebhookListResponseModel": V0AppWebhookListResponseModel,
    "V0AppWebhookResponseItemModel": V0AppWebhookResponseItemModel,
    "V0AppWebhookResponseModel": V0AppWebhookResponseModel,
    "V0AppWebhookUpdateParams": V0AppWebhookUpdateParams,
    "V0AppleAPICredentialResponseItem": V0AppleAPICredentialResponseItem,
    "V0AppleAPICredentialsListResponse": V0AppleAPICredentialsListResponse,
    "V0ArtifactDeleteResponseModel": V0ArtifactDeleteResponseModel,
    "V0ArtifactListElementResponseModel": V0ArtifactListElementResponseModel,
    "V0ArtifactListResponseModel": V0ArtifactListResponseModel,
    "V0ArtifactResponseItemModel": V0ArtifactResponseItemModel,
    "V0ArtifactShowResponseModel": V0ArtifactShowResponseModel,
    "V0ArtifactUpdateParams": V0ArtifactUpdateParams,
    "V0AvatarCandidateCreateParams": V0AvatarCandidateCreateParams,
    "V0AvatarCandidateCreateResponseItem": V0AvatarCandidateCreateResponseItem,
    "V0AvatarPromoteParams": V0AvatarPromoteParams,
    "V0AvatarPromoteResponseItemModel": V0AvatarPromoteResponseItemModel,
    "V0AvatarPromoteResponseModel": V0AvatarPromoteResponseModel,
    "V0BranchListResponseModel": V0BranchListResponseModel,
    "V0BuildAbortParams": V0BuildAbortParams,
    "V0BuildAbortResponseModel": V0BuildAbortResponseModel,
    "V0BuildCertificateListResponseModel": V0BuildCertificateListResponseModel,
    "V0BuildCertificateResponseItemModel": V0BuildCertificateResponseItemModel,
    "V0BuildCertificateResponseModel": V0BuildCertificateResponseModel,
    "V0BuildCertificateUpdateParams": V0BuildCertificateUpdateParams,
    "V0BuildCertificateUploadParams": V0BuildCertificateUploadParams,
    "V0BuildListAllResponseItemModel": V0BuildListAllResponseItemModel,
    "V0BuildListAllResponseModel": V0BuildListAllResponseModel,
    "V0BuildListResponseModel": V0BuildListResponseModel,
    "V0BuildLogChunkItemResponseModel": V0BuildLogChunkItemResponseModel,
    "V0BuildLogInfoResponseModel": V0BuildLogInfoResponseModel,
    "V0BuildParamsEnvironment": V0BuildParamsEnvironment,
    "V0BuildRequestListResponseModel": V0BuildRequestListResponseModel,
    "V0BuildRequestResponseItemModel": V0BuildRequestResponseItemModel,
    "V0BuildRequestUpdateParams": V0BuildRequestUpdateParams,
    "V0BuildRequestUpdateResponseModel": V0BuildRequestUpdateResponseModel,
    "V0BuildResponseItemModel": V0BuildResponseItemModel,
    "V0BuildShowResponseModel": V0BuildShowResponseModel,
    "V0BuildTriggerParams": V0BuildTriggerParams,
    "V0BuildTriggerParamsBuildParams": V0BuildTriggerParamsBuildParams,
    "V0BuildTriggerParamsHookInfo": V0BuildTriggerParamsHookInfo,
    "V0BuildTriggerRespModel": V0BuildTriggerRespModel,
    "V0BuildWorkflowListResponseModel": V0BuildWorkflowListResponseModel,
    "V0CommitPaths": V0CommitPaths,
    "V0FindAvatarCandidateResponse": V0FindAvatarCandidateResponse,
    "V0FindAvatarCandidateResponseItem": V0FindAvatarCandidateResponseItem,
    "V0OrganizationDataModel": V0OrganizationDataModel,
    "V0OrganizationListRespModel": V0OrganizationListRespModel,
    "V0OrganizationOwner": V0OrganizationOwner,
    "V0OrganizationRespModel": V0OrganizationRespModel,
    "V0OwnerAccountResponseModel": V0OwnerAccountResponseModel,
    "V0OwnerAddOnResponseItemModel": V0OwnerAddOnResponseItemModel,
    "V0OwnerAddOnsListResponseModel": V0OwnerAddOnsListResponseModel,
    "V0PagingResponseModel": V0PagingResponseModel,
    "V0PlanDataModel": V0PlanDataModel,
    "V0ProjectFileStorageDocumentUpdateParams": V0ProjectFileStorageDocumentUpdateParams,
    "V0ProjectFileStorageListResponseModel": V0ProjectFileStorageListResponseModel,
    "V0ProjectFileStorageResponseItemModel": V0ProjectFileStorageResponseItemModel,
    "V0ProjectFileStorageResponseModel": V0ProjectFileStorageResponseModel,
    "V0ProjectFileStorageUploadParams": V0ProjectFileStorageUploadParams,
    "V0ProvProfileDocumentUpdateParams": V0ProvProfileDocumentUpdateParams,
    "V0ProvisionProfileListResponseModel": V0ProvisionProfileListResponseModel,
    "V0ProvisionProfileResponseItemModel": V0ProvisionProfileResponseItemModel,
    "V0ProvisionProfileResponseModel": V0ProvisionProfileResponseModel,
    "V0ProvisionProfileUploadParams": V0ProvisionProfileUploadParams,
    "V0SSHKeyRespModel": V0SSHKeyRespModel,
    "V0SSHKeyUploadParams": V0SSHKeyUploadParams,
    "V0TestDeviceListResponseModel": V0TestDeviceListResponseModel,
    "V0TestDeviceResponseItemModel": V0TestDeviceResponseItemModel,
    "V0UserPlanDataModel": V0UserPlanDataModel,
    "V0UserPlanRespModel": V0UserPlanRespModel,
    "V0UserProfileDataModel": V0UserProfileDataModel,
    "V0UserProfileRespModel": V0UserProfileRespModel,
    "V0WebhookDeliveryItemResponseModel": V0WebhookDeliveryItemResponseModel,
    "V0WebhookDeliveryItemShowResponseModel": V0WebhookDeliveryItemShowResponseModel,
    "V0WebhookRespModel": V0WebhookRespModel,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
