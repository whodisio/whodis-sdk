# whodis-sdk

A simple sdk for easy, secure, best practices authentication with the whodis platform.

Setup secure authentication for your app in seconds.

# usage

### install

```sh
npm install --save whodis-sdk
```

### example

quick example of extracting authenticated user data from headers

```ts
import { getAuthedClaimsFromHeaders } from 'whodis-sdk';

const claims = await getAuthedClaimsFromHeaders({ headers: event.headers, config: config.whodis, log });
const userUuid = claims?.sub ?? null; // this is the userUuid that you can use to uniquely identify your users
```

_note: assuming that the token was issued by [`whodis`](https://github.com/whodisio/whodis-cli) and fetched with [`whodis-client`](https://github.com/whodisio/whodis-client) / [`whodis-react`](https://github.com/whodisio/whodis-react)._

# docs

### `getAuthedClaimsFromHeaders({ headers, config, log })`

`getAuthedClaimsFromHeaders` extracts authenticated claims from the auth token found in the headers, if any exist. Additionally, it monitors authentication errors to proactively help with debugging and detect potential security attacks.

Operation:

- if there is no auth token in the headers, the function returns `null`
- if there is an auth token and it can not be authenticated, the error will be logged, reported, and the function returns `null`
- if there is an auth token and it is successfully authenticated, the function will return the token claims

```ts
const claims = await getAuthedClaimsFromHeaders({
  // the headers hold the auth token well be authing
  headers,

  // the config provides the keys required to complete a secure authentication of a JWT
  config: {
    issuer: 'https://auth.whodis.io/__yourdirectoryuuid__', // must match up exactly with what is present on the token, to verify that the token was from the intended authority
    audience: 'https://api.__yourwebsite__.com', // must match up exactly with what is present on the token, to verify the token was intended for you
  },

  // the log methods allow you to monitor authentication errors
  log: {
    warn: (message: string, metadata: Record<string, string>) => console.log(message, metadata), // replace this with your favorite log method
  },
});
```

# nuances

### cookie based authentication

If your users are interacting with your app through the browser, there is no choice but to use cookie based token storage for security (due to all data accessible by JS being vulnerable to XSS).

Fortunately for us, browsers make it really challenging to work with cookies. A combination of CORS and Cookie security standards results in a very fine line of how your preflight-request responses have to look like in order for the cookie to be sent and the browser not to throw an error at the request.

Specifically:

1. your client has to make the request with the flag `{ credentials: 'include' }`
2. your server's preflight response has to include the header `access-control-allow-credentials: true`
3. your server's preflight response has to include the header `access-control-allow-headers: content-type,authorization`
4. your server's preflight response has to include the header `access-control-allow-origin: __YOUR_WEBSITES_ORIGIN__`
   1. where `__YOUR_WEBSITES_ORIGIN__` is the full origin uri listed in the request header by the browser (e.g., `https://www.yourdomain.com`)

Typically, this is done by setting up a custom route that responds specifically to the `OPTIONS` method on all paths of the api. (The `OPTIONS` method is called by browsers in the preflight requests that browsers check the above settings with).

For example, if you are working with the `serverless` framework you can setup an HTTP api gateway that handles all options requests with the following:

```yml
corsPreflightResponse:
  handler: dist/contract/handlers/corsPreflightResponse.handler
  events:
    - httpApi:
        method: OPTIONS
        path: /user/{proxy+}
```

with the code of the handler as follows:

```ts
import Joi from 'joi';
import { createApiGatewayHandler } from 'simple-lambda-handler';

export const CORS_SETTINGS = {
  // define each origin website that you want to support here (or set `origins: '*'` if you want to support all origins)
  origins: ['https://www.yourwebsite.com', 'https://localhost.yourwebsite.com:3443'], // for example, support the main website and a localhost variant

  // define that this server supports credentials
  withCredentials: true, // with credentials, since tokens come in cookies from browser
};

// return a successful response each time
const handle = async (): Promise<{ statusCode: 200; headers?: any; body: undefined }> => {
  return {
    statusCode: 200,
    body: undefined,
  };
};

// export the handler
export const handler = createApiGatewayHandler({
  log,
  schema: Joi.object().unknown(true), // allow any input shape
  logic: handle,
  cors: CORS_SETTINGS,
});
```
