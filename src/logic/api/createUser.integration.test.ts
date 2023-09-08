import dotenv from 'dotenv';

import { WhodisContactMethodType } from '../../domain';
import { createUser } from './createUser';

dotenv.config();
if (!process.env.API_PUBLIC_KEY) throw new Error('public key not defined');
if (!process.env.API_PRIVATE_KEY) throw new Error('private key not defined');

describe('createUser', () => {
  it('should be able to add a contact method', async () => {
    const user = await createUser(
      {
        externalId: 'whodis-sdk:bde659d8-edbc-4103-9699-c8d6e9fee8b9',
        contactMethod: {
          type: WhodisContactMethodType.EMAIL,
          address: 'tedoramustacomsu@gmail.com',
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
      'tedoramustacomsu@gmail.com',
    );
  });
});
