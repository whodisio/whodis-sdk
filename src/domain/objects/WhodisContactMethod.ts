/**
 * a communication channel that can be used for authentication
 */
export enum WhodisContactMethodType {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
}

/**
 * a contact method that can be used for authentication
 */
export interface WhodisContactMethod {
  type: WhodisContactMethodType;
  address: string;
}

/**
 * an origin which can report identities
 */
export enum WhodisIdentityOrigin {
  /**
   * the openid-connect protocol can report identities to us
   *
   * specifically
   * - upon successfully completing authentication through oidc, the authorized subject's primary key is provided
   */
  OIDC = 'OIDC',

  /**
   * the api of whodis can be used by directory-admins to report identities to us
   *
   * specifically
   * - authorized callers may use the whodis api to add identities of the user known by their app
   *
   * for example
   * - you may add the id your app has assigned the user internally, for lookup here
   */
  API = 'API',
}

/**
 * an identity maintained by some identity-provider
 *
 * for example
 * - an identity maintained by Google or Apple
 * - an identity maintained by the directory admin's app
 */
export interface WhodisIdentity {
  uuid: string;

  /**
   * where this identity came from
   *
   * for example
   * - from an oidc response
   * - from an api call
   */
  origin: WhodisIdentityOrigin;

  /**
   * the identity-provider which maintains this identity
   *
   * note
   * - if this is an oidc origin, then the provider will be a well-known oidc provider, established in svc-authentication
   * - if this is an api origin, then the provider may be any string
   */
  provider: string;

  /**
   * the primary key identifier this identity-provider is maintaining
   */
  identifier: string;
}

export interface WhodisIdentityProfileName {
  full: string;
  first: string | null;
  last: string | null;
}
export interface WhodisIdentityProfilePicture {
  uri: string;
}

/**
 * a profile about a specific identity
 *
 * for example
 * - the Google identity for this user includes a profile name and picture
 */
export interface WhodisIdentityProfile {
  /**
   * the identity for which this profile is defined
   */
  identityUuid: string;

  /**
   * the name on this user identity's profile
   */
  name: WhodisIdentityProfileName;

  /**
   * the picture on this user identity's profile
   */
  picture: WhodisIdentityProfilePicture | null;
}
