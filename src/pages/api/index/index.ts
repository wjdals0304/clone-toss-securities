import { NextApiRequest, NextApiResponse } from 'next';
import { IndexSectionType } from '@/pages/Index/type';
import { bondData, materialData, indexData } from '@/data/indexData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { tab } = req.query;
    if (tab === IndexSectionType.INDEX) {
      res.status(200).json(indexData);
    } else if (tab === IndexSectionType.BOND) {
      res.status(200).json(bondData);
    } else if (tab === IndexSectionType.MATERIAL) {
      res.status(200).json(materialData);
    } else {
      res.status(400).json({ message: 'Invalid tab' });
    }
  }
}
