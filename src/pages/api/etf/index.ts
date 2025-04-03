import { NextApiRequest, NextApiResponse } from 'next';
import { EtfSection } from '@/types/etf';
import { etfData } from '@/data/etf';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EtfSection[]>,
) {
  if (req.method === 'GET') {
    res.status(200).json(etfData);
  } else {
    res.status(405).end();
  }
}
