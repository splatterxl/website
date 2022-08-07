import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import usePageTransition from '../util/transition';

export const Link: React.FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  const transition = usePageTransition(props.href);

  return (
    <a
      {...props}
      onClick={
        props.href
          ? async (event) => {
              event.preventDefault();

              await transition.doTransition();
            }
          : undefined
      }
    />
  );
};
