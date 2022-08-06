import { Appear } from './Appear';

export const Pronouns: React.FC = () => {
  return (
    <div
      className="justify-end flex-col hidden select-none w-0 xs:flex"
      aria-hidden
    >
      <Appear as="span" duration={0.8} className="italic" id="pronouns">
        he/him
      </Appear>
    </div>
  );
};
