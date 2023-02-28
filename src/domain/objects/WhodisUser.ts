import { WhodisContactMethod } from './WhodisContactMethod';

/**
 * an authable user registered by whodis
 */
export interface WhodisUser {
  /**
   * the uuid that uniquely identifies this user
   */
  uuid: string;

  /**
   * the contact methods that have been registered for the user
   */
  contactMethods: WhodisContactMethod[];
}
