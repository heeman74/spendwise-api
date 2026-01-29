import { DateTimeScalar, DecimalScalar } from './scalars';
import { userResolvers } from './user';
import { accountResolvers } from './account';
import { transactionResolvers } from './transaction';
import { savingsGoalResolvers } from './savingsGoal';
import { analyticsResolvers } from './analytics';
import { adviceResolvers } from './advice';

export const resolvers = {
  DateTime: DateTimeScalar,
  Decimal: DecimalScalar,

  Query: {
    _empty: () => '',
    ...userResolvers.Query,
    ...accountResolvers.Query,
    ...transactionResolvers.Query,
    ...savingsGoalResolvers.Query,
    ...analyticsResolvers.Query,
    ...adviceResolvers.Query,
  },

  Mutation: {
    _empty: () => '',
    ...userResolvers.Mutation,
    ...accountResolvers.Mutation,
    ...transactionResolvers.Mutation,
    ...savingsGoalResolvers.Mutation,
  },

  User: userResolvers.User,
  Account: accountResolvers.Account,
  Transaction: transactionResolvers.Transaction,
  SavingsGoal: savingsGoalResolvers.SavingsGoal,
  DashboardStats: analyticsResolvers.DashboardStats,
};
