import { getAuthedClaims, getTokenFromHeaders } from 'simple-jwt-auth';
import { LogMethod } from 'simple-leveled-log-methods';
import { WhodisAuthTokenClaims } from 'whodis-client';

import { reportAuthErrorForDiagnosis } from './reportAuthErrorForDiagnosis';

/**
 * extracts authenticated user data from the auth token found in the headers, if any exists
 *
 * additionally, monitors authentication errors to proactively help with debugging and detect potential security attacks
 */
export const getAuthedClaimsFromHeaders = async ({
  headers,
  config,
  log,
}: {
  headers: Record<string, any>;
  config: {
    issuer: string;
    audience: string;
  };
  log: {
    warn: LogMethod;
  };
}): Promise<WhodisAuthTokenClaims | null> => {
  try {
    // check if theres a token on the request
    const token = getTokenFromHeaders({ headers });
    if (!token) return null;

    // if there is, grab the claims
    const claims = await getAuthedClaims<WhodisAuthTokenClaims>({
      token, // the token
      issuer: config.issuer, // who issued the token
      audience: config.audience, // who the token is intended for
    });

    // return the whodis user
    return claims;
  } catch (error) {
    await reportAuthErrorForDiagnosis({ error, config, headers, log });
    return null;
  }
};
