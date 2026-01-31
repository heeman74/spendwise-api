import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid';

const plaidClientId = process.env.PLAID_CLIENT_ID;
const plaidSecret = process.env.PLAID_SECRET;
const plaidEnv = (process.env.PLAID_ENV || 'sandbox') as 'sandbox' | 'development' | 'production';

if (!plaidClientId || !plaidSecret) {
  throw new Error('PLAID_CLIENT_ID and PLAID_SECRET environment variables must be set');
}

const configuration = new Configuration({
  basePath: PlaidEnvironments[plaidEnv],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': plaidClientId,
      'PLAID-SECRET': plaidSecret,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);

// Re-export useful types for resolvers
export { PlaidEnvironments, Products, CountryCode };
