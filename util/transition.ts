import { useRouter } from 'next/router';
import { useContext } from 'react';
import { DisappearerContext } from './TransitionProvider';

export default function usePageTransition(href?: string) {
  const [, hooks, removeAll] = useContext(DisappearerContext);
  const router = useRouter();

  if (!href) return { async doTransition() {} };

  return {
    doTransition: () => {
      console.log('transitioning to', href);
      return Promise.all(
        hooks.map(([hook, id]) =>
          hook().then(() => {
            console.debug('done elem transition', id);
          })
        )
      ).then(() => {
        removeAll();
        router.push(href);
      });
    },
  };
}
