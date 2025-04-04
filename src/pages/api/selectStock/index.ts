import { NextApiRequest, NextApiResponse } from 'next';
import { selectStockData } from '@/data/selectStockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(selectStockData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
