import {
  WhodisContactMethod,
  WhodisIdentity,
  WhodisIdentityProfile,
} from './WhodisContactMethod';

/**
 * an authable user registered by whodis
 */
export interface WhodisUser {
  /**
   * the uuid that uniquely identifies this user
   */
  uuid: string;

  /**
   * the directory the user is a part of
   */
  directoryUuid: string;

  /**
   * the external id which uniquely identifies this user in the directory
   */
  externalId: string;

  /**
   * the contact methods that have been registered for the user
   */
  contactMethods: WhodisContactMethod[];

  /**
   * the identities that have been registered for the user
   */
  identities: WhodisIdentity[];

  /**
   * the profiles associated with the users identities that have been recorded
   */
  profiles: WhodisIdentityProfile[];
}
