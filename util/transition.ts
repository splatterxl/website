import { useContext } from 'react';
import { DisappearerContext } from './Disappear';

export default function usePageTransition(href: string) {
  const [, hooks, removeAll] = useContext(DisappearerContext);

  return {
    doTransition: () =>
      Promise.all(
        hooks.map(([hook, id]) =>
          hook().then(() => {
            console.debug('doing elem transition', id);
          })
        )
      ).then(() => removeAll()),
  };
}
