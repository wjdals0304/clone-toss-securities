import { NextApiRequest, NextApiResponse } from 'next';
import { TransactionSection } from '@/types/transaction';
import { transactionBuyData, transactionSellData } from '@/data/transaction';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransactionSection[]>,
) {
  if (req.method === 'GET') {
    const ranking = req.query.ranking as string;
    if (ranking === 'buy') {
      res.status(200).json(transactionBuyData);
    } else if (ranking === 'sell') {
      res.status(200).json(transactionSellData);
    } else {
      res.status(400).end();
    }
  } else {
    res.status(405).end();
  }
}
