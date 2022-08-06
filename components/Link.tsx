import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, DetailedHTMLProps, useContext } from 'react';
import { DisappearerContext } from '../util/Disappear';

export const Link: React.FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  const router = useRouter(),
    [, refs, unregister] = useContext(DisappearerContext);

  return (
    <a
      {...props}
      onClick={
        props.href
          ? async (event) => {
              event.preventDefault();
            }
          : undefined
      }
    />
  );
};
