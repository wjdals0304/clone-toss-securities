import { NextApiRequest, NextApiResponse } from 'next';
import { NewsResponse } from '@/types/news';
import { newsData } from '@/data/newsData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsResponse>,
) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ items: [] });
    }

    res.status(200).json(newsData);
  } catch (error) {
    console.error('News API Error:', error);
    res.status(500).json({ items: [] });
  }
}
