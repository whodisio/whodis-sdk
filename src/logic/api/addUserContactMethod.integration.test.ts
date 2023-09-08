import dotenv from 'dotenv';

import { WhodisContactMethodType } from '../../domain';
import { addUserContactMethod } from './addUserContactMethod';

dotenv.config();
if (!process.env.API_PUBLIC_KEY) throw new Error('public key not defined');
if (!process.env.API_PRIVATE_KEY) throw new Error('private key not defined');

describe('addUserContactMethod', () => {
  it('should be able to add a contact method', async () => {
    const user = await addUserContactMethod(
      {
        userUuid: 'a403997e-f727-45ad-8afc-d4a99137f821',
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
    expect(user?.contactMethods.map((method) => method.address)).toContain(
      'bobbert@snailmail.com',
    );
  });
});
