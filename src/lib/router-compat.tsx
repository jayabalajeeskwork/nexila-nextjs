"use client";

import NextLink from "next/link";
import { usePathname, useRouter, useParams as useNextParams } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
  replace?: boolean;
};

/** Temporary adapter mapping the existing React Router API to Next.js navigation. */
export function Link({ to, children, replace = false, ...props }: LinkProps) {
  return <NextLink href={to} replace={replace} {...props}>{children}</NextLink>;
}

export function useNavigate() {
  const router = useRouter();
  return (href: string, options?: { replace?: boolean }) => {
    if (options?.replace) router.replace(href);
    else router.push(href);
  };
}

export function useParams<T extends Record<string, string | string[] | undefined> = Record<string, string | string[] | undefined>>() {
  return useNextParams<T>();
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname, search: "", hash: "", state: null, key: "default" };
}
