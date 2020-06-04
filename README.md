# hpc-test
hpc e2e tests

### Setup

1. Install jest/cypress globally
> npm i -g jest cypress

2. Start hid_mock app
> npm run hid:install
> npm run hid:start

3. Find out local ip
> ip addr show | grep inet

4. Update configuration for each hpc app & api
- replace http://api.hid.vm with http://<your-ip>:4000
- restart apps/api containers

5. Run e2e tests
> npm run test:fts
> npm run test:rpm
> npm run test:projects
