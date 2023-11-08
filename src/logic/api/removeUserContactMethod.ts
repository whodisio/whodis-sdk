import axios, { AxiosError } from 'axios';
import { createSecureRequestSignature } from 'simple-hmackey-auth';

import { WhodisContactMethod, WhodisUser } from '../../domain';
import { WHODIS_API_HOST } from './WHODIS_API_HOST';
import { findWhodisBadRequestErrorInAxiosError } from './WhodisBadRequestError';

export const removeUserContactMethod = async (
  args: { userUuid: string; contactMethod: WhodisContactMethod },
  context: { credentials: { privateKey: string; publicKey: string } },
): Promise<WhodisUser | null> => {
  // create a signature for the request
  const signature = await createSecureRequestSignature({
    clientPublicKey: context.credentials.publicKey,
    clientPrivateKey: context.credentials.privateKey,
    request: {
      host: WHODIS_API_HOST,
      endpoint: '/sdk/user/contact-method/remove',
      headers: {},
      payload: args,
    },
  });

  // make the request
  try {
    const { data } = await axios.post(
      `${WHODIS_API_HOST}/sdk/user/contact-method/remove`,
      args,
      { headers: { authorization: `HMAC ${signature}` } },
    );
    return data.user;
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    const whodisBadRequestError = findWhodisBadRequestErrorInAxiosError({
      axiosError: error as AxiosError,
    });
    if (whodisBadRequestError) throw whodisBadRequestError; // if we found its a whodisBadRequestError, throw it
    throw error; // otherwise, just pass the error up as is - there's nothing helpful we can add onto it
  }
};
