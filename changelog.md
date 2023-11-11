# Changelog

## [0.6.0](https://github.com/whodisio/whodis-sdk/compare/v0.5.1...v0.6.0) (2023-11-11)


### Features

* **api:** add apikey based sdk api methods ([9c43890](https://github.com/whodisio/whodis-sdk/commit/9c43890d37229d36b935abfeeae84ef3d3d9c27e))
* **api:** createUser and getUser.byContactMethod ([cc4d140](https://github.com/whodisio/whodis-sdk/commit/cc4d1406d51dfe5d6aec08c4cec09c4836cb55f5))
* **api:** enable removing user contact methods ([#8](https://github.com/whodisio/whodis-sdk/issues/8)) ([ec5c389](https://github.com/whodisio/whodis-sdk/commit/ec5c389f7586e9fe355fb3d7c661f2d0f2a6f1b5))
* **auth:** init based on template; expose getAuthedClaimsFromHeaders functionality ([446613f](https://github.com/whodisio/whodis-sdk/commit/446613f4c916b98b410f219629beee9ebd02f2b3))
* **oidc:** support oidc identities ([affff74](https://github.com/whodisio/whodis-sdk/commit/affff741e64a2eb2cf52b25eef21afe0aa8474e8))


### Bug Fixes

* **cicd:** add example keys for testing to publish workflow ([eee4bee](https://github.com/whodisio/whodis-sdk/commit/eee4bee491e70767fffe832d2336453cd24fd427))
* **cicd:** add example public and private key env var for testing ([201a162](https://github.com/whodisio/whodis-sdk/commit/201a1620cedd70c0aa04d836ebcfc6116aa1501e))
* **cicd:** ensure publish isnt blocked ([7278bba](https://github.com/whodisio/whodis-sdk/commit/7278bba961e32ec30f6fa5109b17dde9fafa008d))
* **cicd:** pass secrets as env vars correctly ([8eb2840](https://github.com/whodisio/whodis-sdk/commit/8eb2840038f6a93f7cf299a7544329f19a91de5b))
* **contract:** expose the removal method ([3aff2bb](https://github.com/whodisio/whodis-sdk/commit/3aff2bbff1bdea6050e8074ff2db5f7d97db07a6))
* **deps:** drop dependency on whodis-client ([33ccf93](https://github.com/whodisio/whodis-sdk/commit/33ccf9392a803a4220cba18ade489ada4ad8ad51))
* **deps:** remove extra deps ([e269159](https://github.com/whodisio/whodis-sdk/commit/e269159a4bb34fce2bcdec295ca984d170f49582))
* **domain:** contactMethod.channel -&gt; contactMethod.type ([6677579](https://github.com/whodisio/whodis-sdk/commit/6677579bd5292774b40291d573c1534847598cc3))
* **logs:** remove console logs from debugging ([9b87c76](https://github.com/whodisio/whodis-sdk/commit/9b87c7653b85149526b048d8bf8af7459ffb9bbc))
* **practs:** bump to latest best practs ([c8d74fc](https://github.com/whodisio/whodis-sdk/commit/c8d74fc71e408ba9162b997f64b19ad94f142d33))
* **practs:** upgrade to latest declapract-typescript-ehmpathy best practices ([f13688a](https://github.com/whodisio/whodis-sdk/commit/f13688afa58db4a5dd90ff26d4902e87aa932d0b))
* **readme:** correct getAuthedClaimsFromHeaders name in readme ([d66a69e](https://github.com/whodisio/whodis-sdk/commit/d66a69e9bbdd386826bc94eb965fb362a37a3ad4))
* **test:** skip the standard authclaims tests due to token expr ([8dd10e8](https://github.com/whodisio/whodis-sdk/commit/8dd10e8b72c3305f831f4f05ba4c0bf747f9c495))
* **test:** update test since directory changed ([9b3f357](https://github.com/whodisio/whodis-sdk/commit/9b3f3574f6a5d107e7becbc005d73cec7012b474))
* **types:** assert that createUser returns a user ([1e9280c](https://github.com/whodisio/whodis-sdk/commit/1e9280ce35d884250466c5f3aa47ae31eea2b45a))

## [0.5.1](https://github.com/whodisio/whodis-sdk/compare/v0.5.0...v0.5.1) (2023-11-11)


### Bug Fixes

* **contract:** expose the removal method ([3aff2bb](https://github.com/whodisio/whodis-sdk/commit/3aff2bbff1bdea6050e8074ff2db5f7d97db07a6))

## [0.5.0](https://github.com/whodisio/whodis-sdk/compare/v0.4.2...v0.5.0) (2023-11-08)


### Features

* **api:** enable removing user contact methods ([#8](https://github.com/whodisio/whodis-sdk/issues/8)) ([ec5c389](https://github.com/whodisio/whodis-sdk/commit/ec5c389f7586e9fe355fb3d7c661f2d0f2a6f1b5))

## [0.4.2](https://github.com/whodisio/whodis-sdk/compare/v0.4.1...v0.4.2) (2023-09-08)


### Bug Fixes

* **domain:** contactMethod.channel -&gt; contactMethod.type ([6677579](https://github.com/whodisio/whodis-sdk/commit/6677579bd5292774b40291d573c1534847598cc3))

## [0.4.1](https://github.com/whodisio/whodis-sdk/compare/v0.4.0...v0.4.1) (2023-09-06)


### Bug Fixes

* **cicd:** ensure publish isnt blocked ([7278bba](https://github.com/whodisio/whodis-sdk/commit/7278bba961e32ec30f6fa5109b17dde9fafa008d))

## [0.4.0](https://github.com/whodisio/whodis-sdk/compare/v0.3.1...v0.4.0) (2023-09-06)


### Features

* **oidc:** support oidc identities ([affff74](https://github.com/whodisio/whodis-sdk/commit/affff741e64a2eb2cf52b25eef21afe0aa8474e8))


### Bug Fixes

* **cicd:** pass secrets as env vars correctly ([8eb2840](https://github.com/whodisio/whodis-sdk/commit/8eb2840038f6a93f7cf299a7544329f19a91de5b))
* **deps:** remove extra deps ([e269159](https://github.com/whodisio/whodis-sdk/commit/e269159a4bb34fce2bcdec295ca984d170f49582))
* **practs:** bump to latest best practs ([c8d74fc](https://github.com/whodisio/whodis-sdk/commit/c8d74fc71e408ba9162b997f64b19ad94f142d33))
* **test:** update test since directory changed ([9b3f357](https://github.com/whodisio/whodis-sdk/commit/9b3f3574f6a5d107e7becbc005d73cec7012b474))

## [0.3.1](https://github.com/whodisio/whodis-sdk/compare/v0.3.0...v0.3.1) (2023-05-22)


### Bug Fixes

* **types:** assert that createUser returns a user ([1e9280c](https://github.com/whodisio/whodis-sdk/commit/1e9280ce35d884250466c5f3aa47ae31eea2b45a))

## [0.3.0](https://github.com/whodisio/whodis-sdk/compare/v0.2.4...v0.3.0) (2023-05-22)


### Features

* **api:** createUser and getUser.byContactMethod ([cc4d140](https://github.com/whodisio/whodis-sdk/commit/cc4d1406d51dfe5d6aec08c4cec09c4836cb55f5))

## [0.2.4](https://github.com/whodisio/whodis-sdk/compare/v0.2.3...v0.2.4) (2023-03-01)


### Bug Fixes

* **deps:** drop dependency on whodis-client ([33ccf93](https://github.com/whodisio/whodis-sdk/commit/33ccf9392a803a4220cba18ade489ada4ad8ad51))

## [0.2.3](https://github.com/whodisio/whodis-sdk/compare/v0.2.2...v0.2.3) (2023-03-01)


### Bug Fixes

* **practs:** upgrade to latest declapract-typescript-ehmpathy best practices ([f13688a](https://github.com/whodisio/whodis-sdk/commit/f13688afa58db4a5dd90ff26d4902e87aa932d0b))
