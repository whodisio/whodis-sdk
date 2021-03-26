import { LogMethod } from 'simple-leveled-log-methods';

/**
 * securely reports an auth error to whodis
 *
 * for the purpose of:
 * - automatically detecting security attacks and mitigating
 * - aiding in debugging, with proactive and reactive support
 *
 * messages encrypted in flight and at rest destination
 */
export const reportAuthErrorForDiagnosis = async ({
  error,
  headers,
  config,
  log,
}: {
  error: Error;
  headers: Record<string, string>;
  config: {
    issuer: string;
    audience: string;
  };
  log: {
    warn: LogMethod;
  };
}) => {
  // log warn for all rejections. even refreshes, since their client should not be sending requests with expired tokens - it should know better
  log.warn('authentication error detected', {
    error: { name: error.name, message: error.message },
    context: { config, headers },
  });

  // send the message to whodis to help with proactive reach out, reactive support, and for automated security monitoring
  // TODO: actually report it back to whodis
};
