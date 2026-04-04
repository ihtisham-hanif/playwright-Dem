/*import { test, expect } from '@playwright/test';

test('GET', async ({ request }) => {
const respone= request.get('https://staking-testnet-qa-api.alvara.xyz/portfolio/open-bts?page=1&limit=10&address=0x94c551735adC7801F29ba5e5aaEFcE7faa7bF335')
{
    Headers:{bearertoken:""}
}
console.log(((await respone).json)*/


import { test, expect } from '@playwright/test';

test('GET API with Authorization Token', async ({ request }) => {

  const response = await request.get(
    'https://staking-testnet-qa-api.alvara.xyz/portfolio/open-bts?page=1&limit=10&address=0x94c551735adC7801F29ba5e5aaEFcE7faa7bF335',
    {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGVhMDIyZjhkYmQ5NmJmMDhhYmJkNWQiLCJpYXQiOjE3NjY0MjU4NDcsImV4cCI6MTc2NjQzMzA0N30.Ujj2AK0_FcCdLcBVfoJnNT6axAgAompUUHLOchRNbNM'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

});

