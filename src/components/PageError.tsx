import { SITE_NAME } from "@/utils/constants";

import Head from "next/head";
import NextLink from "next/link";
import { Link } from "./ui/link";

interface PageErrorProps {
  title: string;
  description: string;
}

export function PageError({ title, description }: PageErrorProps) {
  const pageTitle = `${title} · ${SITE_NAME}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="flex h-screen flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
        <p className="mt-2 text-base">
          Go back to the{" "}
          <Link asChild>
            <NextLink href="/">home</NextLink>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
