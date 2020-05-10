export * from './activityApi';
import { ActivityApi } from './activityApi';
export * from './addonsApi';
import { AddonsApi } from './addonsApi';
export * from './androidKeystoreFileApi';
import { AndroidKeystoreFileApi } from './androidKeystoreFileApi';
export * from './appSetupApi';
import { AppSetupApi } from './appSetupApi';
export * from './appleApiCredentialsApi';
import { AppleApiCredentialsApi } from './appleApiCredentialsApi';
export * from './applicationApi';
import { ApplicationApi } from './applicationApi';
export * from './avatarCandidateApi';
import { AvatarCandidateApi } from './avatarCandidateApi';
export * from './buildArtifactApi';
import { BuildArtifactApi } from './buildArtifactApi';
export * from './buildCertificateApi';
import { BuildCertificateApi } from './buildCertificateApi';
export * from './buildRequestApi';
import { BuildRequestApi } from './buildRequestApi';
export * from './buildsApi';
import { BuildsApi } from './buildsApi';
export * from './genericProjectFileApi';
import { GenericProjectFileApi } from './genericProjectFileApi';
export * from './organizationsApi';
import { OrganizationsApi } from './organizationsApi';
export * from './outgoingWebhookApi';
import { OutgoingWebhookApi } from './outgoingWebhookApi';
export * from './provisioningProfileApi';
import { ProvisioningProfileApi } from './provisioningProfileApi';
export * from './testDevicesApi';
import { TestDevicesApi } from './testDevicesApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './webhookDeliveryItemApi';
import { WebhookDeliveryItemApi } from './webhookDeliveryItemApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [ActivityApi, AddonsApi, AndroidKeystoreFileApi, AppSetupApi, AppleApiCredentialsApi, ApplicationApi, AvatarCandidateApi, BuildArtifactApi, BuildCertificateApi, BuildRequestApi, BuildsApi, GenericProjectFileApi, OrganizationsApi, OutgoingWebhookApi, ProvisioningProfileApi, TestDevicesApi, UserApi, WebhookDeliveryItemApi];
