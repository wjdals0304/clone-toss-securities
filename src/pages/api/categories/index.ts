import { NextApiRequest, NextApiResponse } from 'next';
import { categoryData } from '@/data/categoryData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(categoryData);
  }
}
