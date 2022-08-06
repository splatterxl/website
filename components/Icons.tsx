import { CgProfile } from 'react-icons/cg';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { Appear } from './Appear';
import { Link } from './Link';

const links = [
  { icon: FaGithub, url: 'https://github.com/splatterxl' },
  { icon: FaTwitter, url: 'https://twitter.com/wontfixbug' },
  // { icon: IoMdContact, url: 'mailto:splatterxl@outlook.ie' },
  { icon: CgProfile, url: '/about' },
];

export const Icons: React.FC = () => {
  return (
    <Appear duration={1} id="icons">
      <div className="flex flex-row justify-center items-center mt-3 gap-3">
        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            <link.icon size="1.5rem" />
          </Link>
        ))}
      </div>
    </Appear>
  );
};
