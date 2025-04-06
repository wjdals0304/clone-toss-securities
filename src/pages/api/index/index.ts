import { NextApiRequest, NextApiResponse } from 'next';
import { IndexSectionType } from '@/pages/Index/type';
import { bondData, materialData, indexData } from '@/data/indexData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { tab } = req.query;

    switch (tab) {
      case IndexSectionType.INDEX:
        res.status(200).json(indexData);
        break;
      case IndexSectionType.BOND:
        res.status(200).json(bondData);
        break;
      case IndexSectionType.MATERIAL:
        res.status(200).json(materialData);
        break;
      default:
        res.status(400).json({ message: 'Invalid tab' });
    }
  }
}
