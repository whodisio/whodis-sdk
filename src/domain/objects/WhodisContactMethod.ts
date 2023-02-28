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
