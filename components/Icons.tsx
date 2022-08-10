import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { Appear } from './Appear';

const links = [
  { icon: FaGithub, url: 'https://github.com/splatterxl', name: 'GitHub' },
  { icon: FaTwitter, url: 'https://twitter.com/wontfixbug', name: 'Twitter' },
  { icon: IoMdContact, url: 'mailto:splatterxl@outlook.ie', name: 'Email' },
  // { icon: CgProfile, url: '/about', name: 'About' },
];

export const Icons: React.FC = () => {
  return (
    <Appear
      duration={1}
      id="icons"
      className="flex flex-row justify-start items-center mt-3 ml-4 gap-3 w-full"
    >
      {links.map((link) => (
        <Link key={link.url} href={link.url} passHref>
          <a aria-labelledby={link.name + '__label'}>
            <link.icon size="1.5rem" />
            <span
              style={{ display: 'none' }}
              aria-hidden={false}
              id={link.name + '__label'}
            >
              {link.name}
            </span>
          </a>
        </Link>
      ))}
    </Appear>
  );
};
