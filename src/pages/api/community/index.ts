import { mockCommunityData } from '@/data/communityData';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { stockId } = req.query;

    if (stockId && typeof stockId === 'string') {
      const stock = mockCommunityData.stocks.find(s => s.id === stockId);
      if (!stock) {
        return res.status(404).json({ message: '주식을 찾을 수 없습니다.' });
      }

      return res.status(200).json({
        stock,
        posts: mockCommunityData.posts[stockId] || [],
      });
    }

    const defaultStockId = mockCommunityData.stocks[0].id;
    return res.status(200).json({
      stocks: mockCommunityData.stocks,
      currentStockId: defaultStockId,
      posts: mockCommunityData.posts[defaultStockId],
    });
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
