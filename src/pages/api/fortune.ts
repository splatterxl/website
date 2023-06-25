import { NextApiRequest, NextApiResponse } from 'next';

export const predictions = [
  'In {d} days, your {o} will {adv}{v}.',
  "If you look deep inside your {sp}, you'll {adv}{v}",
  'Your {o} will {adv}{v} very soon.',
  'After a period of time, your {o} will {adv}{v}.',
];
export const supplementary = predictions.concat([
  'After that, your {o} will be {adv}{t}, but {p2} will {adv2} {t2}.',
  'But before that, your {o} will {adv}{v}.',
]);

const data: Record<string, string[]> = {
  d: [1, 2, 5, 7, 20, 30, 31].map((v) => v.toString()),
  o: [
    'spirit',
    'partner',
    'soulmate',
    'dearest posession',
    'true love',
    'parent',
    'soul',
    'pet',
    'friend',
    'best friend',
    'favourite cousin',
  ],
  adv: [
    'spontaneously ',
    'instantaneously ',
    'truly ',
    'naturally ',
    'quickly ',
    'quietly ',
    'slowly ',
    'rapidly ',
    'suddenly ',
    'unexpectedly ',
    '',
    '',
    '',
    '',
  ],
  v: [
    'find peace',
    'deliver a mysterious package',
    'find love',
    'become one with nature',
  ],
  sp: ['soul', 'spirit', 'chakras', 'body', 'mind', 'heart', 'energies'],
  t: [
    'loved',
    'considered',
    'sought after',
    'wanted for crimes against the state',
    'sent to Ohio',
  ],
};

export default function ReturnFortune(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res
    .status(200)
    .send(
      [
        predictions[Math.floor(Math.random() * predictions.length)],
        supplementary[Math.floor(Math.random() * supplementary.length)],
      ].map((v) =>
        v.replace(
          /\{(\w+)\}/g,
          (_, s) => data[s]?.[Math.floor(Math.random() * data[s]?.length)]
        )
      )
    );
}
