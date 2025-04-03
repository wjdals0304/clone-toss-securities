import { NextApiRequest, NextApiResponse } from 'next';
import { TransactionSection } from '@/types/transaction';
import { transactionData } from '@/data/transaction';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransactionSection[]>,
) {
  if (req.method === 'GET') {
    res.status(200).json(transactionData);
  } else {
    res.status(405).end();
  }
}
