import confetti from 'canvas-confetti';

const defaults: confetti.Options = {
  origin: { y: 1 },
  disableForReducedMotion: true,
};

export function fireConfetti(
  particleRatio: number,
  opts: confetti.Options,
  count: number
) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
      origin: { y: 1, x: 1 },
    })
  );
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
      origin: { y: 1, x: window.screenLeft },
    })
  );
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
      origin: { y: 1 },
    })
  );
}

export function confettiBurst(count = 50) {
  fireConfetti(
    0.25,
    {
      spread: 26,
      startVelocity: 55,
    },
    count
  );
  fireConfetti(
    0.2,
    {
      spread: 60,
    },
    count
  );
  fireConfetti(
    0.35,
    {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    },
    count
  );
  fireConfetti(
    0.1,
    {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    },
    count
  );
  fireConfetti(
    0.1,
    {
      spread: 120,
      startVelocity: 45,
    },
    count
  );
}
