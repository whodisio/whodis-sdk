import dotenv from 'dotenv';

import { WhodisContactMethodType } from '../../domain';
import { addUserContactMethod } from './addUserContactMethod';
import { removeUserContactMethod } from './removeUserContactMethod';

dotenv.config();
if (!process.env.API_PUBLIC_KEY) throw new Error('public key not defined');
if (!process.env.API_PRIVATE_KEY) throw new Error('private key not defined');

describe('removeUserContactMethod', () => {
  it('should be able to remove a contact method', async () => {
    // add it to ensure it exists
    const userBefore = await addUserContactMethod(
      {
        userUuid: 'a403997e-f727-45ad-8afc-d4a99137f821',
        contactMethod: {
          type: WhodisContactMethodType.EMAIL,
          address: 'bobdog@snailmail.com',
        },
      },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(userBefore).toHaveProperty('contactMethods');
    expect(userBefore?.contactMethods.length).toBeGreaterThan(0);
    expect(
      userBefore?.contactMethods.map((method) => method.address),
    ).toContain('bobdog@snailmail.com');

    // and remove it to make sure the method works
    const userAfter = await removeUserContactMethod(
      {
        userUuid: 'a403997e-f727-45ad-8afc-d4a99137f821',
        contactMethod: {
          type: WhodisContactMethodType.EMAIL,
          address: 'bobdog@snailmail.com',
        },
      },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(userAfter).toHaveProperty('contactMethods');
    expect(userAfter?.contactMethods.length).toBeGreaterThan(0);
    expect(
      userAfter?.contactMethods.map((method) => method.address),
    ).not.toContain('bobdog@snailmail.com');
  });
});
