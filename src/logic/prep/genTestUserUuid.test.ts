import { genTestUserUuid, isTestUserUuid } from './genTestUserUuid';

describe('genTestUserUuid', () => {
  it('should generate a uuid', () => {
    const uuid = genTestUserUuid();
    expect(uuid).toBeTruthy();
  });
  it('should generate a uuid that is namespaced for testing by whodis', () => {
    const uuid = genTestUserUuid();
    expect(uuid).toMatch(/^beefbeef-.*-.*-.*-beefbeefbeef$/);
    expect(isTestUserUuid(uuid)).toEqual(true);
  });
  it('should generate a uuid that is different every time', () => {
    const uuid1 = genTestUserUuid();
    const uuid2 = genTestUserUuid();
    expect(uuid1).not.toEqual(uuid2);
  });
});
