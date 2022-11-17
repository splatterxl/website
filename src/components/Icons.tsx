import Link from 'next/link';
import { FaGithub, FaScroll, FaSteam, FaTwitter } from 'react-icons/fa';

const links = [
  { icon: FaGithub, url: 'https://github.com/splatterxl', name: 'GitHub' },
  { icon: FaTwitter, url: 'https://twitter.com/wontfixbug', name: 'Twitter' },
  {
    icon: FaSteam,
    url: 'https://steamcommunity.com/id/ruair1/',
    name: 'Steam',
  },
  { icon: FaScroll, url: '/blog', name: 'Blog' },
  // { icon: CgProfile, url: '/about', name: 'About' },
];

export const Icons: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-start items-center mt-3 ml-2 gap-1 w-full">
      {links.map((link) => (
        <Link key={link.url} href={link.url} passHref>
          <a
            aria-labelledby={link.name + '__label'}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener"
          >
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
    </div>
  );
};
