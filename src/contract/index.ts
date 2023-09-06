// api methods
export { addUserContactMethod } from '../logic/api/addUserContactMethod';
export { createUser } from '../logic/api/createUser';
export { getUser } from '../logic/api/getUser';

// auth methods
export { getAuthedClaimsFromHeaders } from '../logic/auth/getAuthedClaimsFromHeaders';

// types
export {
  WhodisContactMethod,
  WhodisContactMethodType,
  WhodisUser,
  WhodisAuthTokenClaims,
  WhodisIdentity,
  WhodisIdentityOrigin,
  WhodisIdentityProfile,
  WhodisIdentityProfileName,
  WhodisIdentityProfilePicture,
} from '../domain';
