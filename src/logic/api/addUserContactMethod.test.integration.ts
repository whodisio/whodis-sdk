import dotenv from 'dotenv';
import { WhodisContactMethodType } from '../../domain';
import { addUserContactMethod } from './addUserContactMethod';

dotenv.config();
if (!process.env.API_PUBLIC_KEY) throw new Error('public key not defined');
if (!process.env.API_PRIVATE_KEY) throw new Error('private key not defined');

describe('addUserContactMethod', () => {
  it('should be able to add a contact method', async () => {
    const user = await addUserContactMethod(
      { userUuid: '26e898e4-9993-4fdb-96d3-b30c732aefdf', contactMethod: { type: WhodisContactMethodType.EMAIL, address: 'bobbert@snailmail.com' } },
      {
        credentials: {
          publicKey: process.env.API_PUBLIC_KEY!,
          privateKey: process.env.API_PRIVATE_KEY!,
        },
      },
    );
    expect(user).toHaveProperty('contactMethods');
    expect(user?.contactMethods.length).toBeGreaterThan(0);
    expect(user?.contactMethods.map((method) => method.address)).toContain('bobbert@snailmail.com');
  });
});
