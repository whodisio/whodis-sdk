import dotenv from 'dotenv';

import { uuid } from '../../deps';
import { WhodisContactMethodType } from '../../domain';
import { getUser } from './getUser';

dotenv.config();
if (!process.env.API_PUBLIC_KEY) throw new Error('public key not defined');
if (!process.env.API_PRIVATE_KEY) throw new Error('private key not defined');

describe('getUser', () => {
  it('should get null for a non-existent user', async () => {
    const user = await getUser(
      { userUuid: uuid() },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(user).toEqual(null);
  });
  it('should get user data for a real user by uuid', async () => {
    const user = await getUser(
      { userUuid: 'a403997e-f727-45ad-8afc-d4a99137f821' },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(user).toHaveProperty('contactMethods');
    expect(user?.contactMethods.length).toBeGreaterThan(0);
    console.log(user);
  });
  it('should get user data for a real user by contact method', async () => {
    const user = await getUser(
      {
        contactMethod: {
          type: WhodisContactMethodType.EMAIL,
          address: 'bobbert@snailmail.com',
        },
      },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(user).toHaveProperty('contactMethods');
    expect(user?.contactMethods.length).toBeGreaterThan(0);
  });
});
