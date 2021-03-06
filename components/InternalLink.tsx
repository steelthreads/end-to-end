import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export type NextLinkProps = Omit<LinkProps, 'as' | 'href'>;

export type LinkComponentProps = PropsWithChildren<NextLinkProps> & {
  href?: LinkProps['href'];
};

export const InternalLink = ({
  href,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...props
}: LinkComponentProps) => {
  if (!href) return <a {...props} />;

  // Use an `a` tag when linking externally
  // Regex finds links starting with: `http://` | `https://` | `//`
  const hrefAsString = typeof href === 'string' ? href : href?.pathname;
  if (hrefAsString && /^(https?:\/\/|\/\/)/i.test(hrefAsString)) {
    return <a href={hrefAsString} {...props} />;
  }

  return (
    <Link
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a {...props} />
    </Link>
  );
};
