import dotenv from 'dotenv';
import uuid from 'uuid';
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
  it('should get user data for a real user', async () => {
    const user = await getUser(
      { userUuid: '26e898e4-9993-4fdb-96d3-b30c732aefdf' },
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
