import { FooterLinkColumnProps } from '../../../utils/types';

export const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ links }) => (
  <ul className="space-y-2 underline">
    {links.map(({ id, title }) => (
      <li key={id}>
        <a href={`#${title.toLowerCase()}`}>{title}</a>
      </li>
    ))}
  </ul>
);
