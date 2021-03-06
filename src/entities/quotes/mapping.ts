import { IQuote } from '../../entities/quotes/types';

export const mapQuotesFromApiToStore = (companies: Array<any>): Array<IQuote> =>
  companies.map((company) => ({
    name: company.name || '',
    exchange: company.exchange || '',
    marketCapitalization: company.marketCapitalization || 0,
    ticker: company.ticker || '',
  }));
