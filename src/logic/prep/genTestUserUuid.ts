import { uuid } from '../../deps';

/**
 * generates a random user uuid namespaced for testing by whodis, pattern `beefbeef-****-****-****-beefbeefbeef`
 */
export const genTestUserUuid = (): string => {
  return ['beefbeef', ...uuid().split('-').slice(1, -1), 'beefbeefbeef'].join(
    '-',
  );
};

/**
 * decides whether a user uuid is namespaced for testing by whodis
 */
export const isTestUserUuid = (userUuid: string): boolean =>
  /^beefbeef-.*-.*-.*-beefbeefbeef$/.test(userUuid);
