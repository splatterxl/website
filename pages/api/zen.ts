// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export const zens = [
  'When you realize nothing is lacking, the whole world belongs to you. Lao Tzu',
  'Let go, or be dragged. Zen proverb',
  'What the superior man seeks is in himself; what the small man seeks is in others. Confucius',
  'To seek is to suffer. To seek nothing is bliss. Bodhidharma',
  'Mind is like a mad monkey. Sathya Sai Baba',
  "Wise men don't judge – they seek to understand. Wei Wu Wei",
  // 'When thoughts arise, then do all things arise. When thoughts vanish, then do all things vanish. Huang Po',
  "Wherever you are, it's the place you need to be. Maxime Lagacé",
  // 'The noble-minded are calm and steady. Little people are forever fussing and fretting. Confucius',
  "Rest and be kind, you don't have to prove anything. Jack Kerouac",
  'Nothing ever goes away until it has taught us what we need to know. Pema Chödrön',
  'Only the hand that erases can write the true thing. Meister Eckhart',
  'Where can I find a man who has forgotten words so I can talk with him? Zhuangzi',
  // 'When we discover that the truth is already in us, we are all at once our original selves. Dogen',
  'Life is a balance of holding on and letting go. Rumi',
  'Wherever you are, be there totaly. Eckhart Tolle',
  'I live by letting thigs happen. Dogen',
  // 'Zen is not some fancy, special art of living. Our teaching is just to live, always in reality, in its exact sens. Shunryu Suzuki',
  'Who you are is always right. Ming-Dao Deg',
  'And when they played they really played. And when they worked they really orked. Dr Seuss',
  "Do not seek the truth, only cease to cherish your opinions. Seng-ts'an",
  'One loses joy and happiness in the attempt to possess them. Masanobu Fukuoka',
  // 'Forget the years, forget distinctions. Leap into the boundless and make it your home. Zhuangzi',
  // 'Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water. Buddha',
  'Education breeds confidence. Confidence breeds hope. Hope breeds peace. Confucius',
  "Relax. Nothing's missing. Maxime Lagacé",
  'Peace of mind is that mental condition in which you have accepted the worst. Lin Yutang',
  // "Learn to be comfortable in adversity but most importantly, learn to be comfortable when you're bored. Maxime Lagacé",
  // 'The mind of the beginner is empty, free of the habits of the expert, ready to accept, to doubt, and open to all the possibilities. Shunryu Suzuki',
  'Relax. Nothing is under control. Adi Da',
  // "The place to improve the world is first in one's own heart and head and hands. Robert M. Pirsig (Zen and the Art of Motorcycle Maintenance)",
  // 'Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend. Bruce Lee',
  'Everything that happens to you is a form of instruction if you pay attention. Robert Greene',
  "I don't mind what happens. That is the essence of inner freedom. Jiddu Krishnamurti",
  'The less you try to impress, the more peaceful you can be. Maxime Lagacé',
  // 'If you are depressed, you are living in the past. If you are anxious, you are living in the future. If you are at peace, you are living in the present. Lao Tzu',
  'Do you have the patience to wait until your mud settles and the water is clear?. Lao Tzu',
  'When one first seeks the truth, one separates oneself from it. Dogen',
  'Still your waters. Josh Waitzkin',
  'Man suffers only because he takes seriously what the gods made for fun. Alan Watts',
  'Muddy water is best cleared by leaving it alone. Alan Watts',
  'Every experience is a lesson. Every loss is a gain. Sathya Sai Baba',
  "Don't seek, don't search, don't ask, don't knock, don't demand – relax. Osho",
];

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send(zens[Math.floor(Math.random() * zens.length)]);
}
