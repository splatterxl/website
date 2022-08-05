import { NextApiRequest, NextApiResponse } from 'next';
import { zens } from '../zen';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const zen = zens[+(req.query.index as string) ];

  if (!zen) {
    res.status(404).send('404: Not Found');
  }

  res.status(200).send(zen);
}
