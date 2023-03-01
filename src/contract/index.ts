// api methods
export { addUserContactMethod } from '../logic/api/addUserContactMethod';
export { getUser } from '../logic/api/getUser';

// auth methods
export { getAuthedClaimsFromHeaders } from '../logic/auth/getAuthedClaimsFromHeaders';

// types
export { WhodisAuthTokenClaims } from 'whodis-client';
export {
  WhodisContactMethod,
  WhodisContactMethodType,
  WhodisUser,
} from '../domain';
