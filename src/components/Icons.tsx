import * as React from 'react';
import {
  FaGithub,
  FaScroll,
  FaSteam,
  FaTwitter,
} from '.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.js';

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

const Icons: React.FC = () => {
  return (
    <div className="icons-container">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
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
      ))}
    </div>
  );
};

export default Icons;
