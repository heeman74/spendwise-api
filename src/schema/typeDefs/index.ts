import { gql } from 'graphql-tag';
import { commonTypeDefs } from './common';
import { userTypeDefs } from './user';
import { accountTypeDefs } from './account';
import { transactionTypeDefs } from './transaction';
import { savingsGoalTypeDefs } from './savingsGoal';
import { analyticsTypeDefs } from './analytics';
import { adviceTypeDefs } from './advice';

// Base types that other types extend
const baseTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = [
  baseTypeDefs,
  commonTypeDefs,
  userTypeDefs,
  accountTypeDefs,
  transactionTypeDefs,
  savingsGoalTypeDefs,
  analyticsTypeDefs,
  adviceTypeDefs,
];
