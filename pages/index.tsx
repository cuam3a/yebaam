import Head from "next/head";
import { useEffect, useState } from "react";
import { useMenuContext } from "@/context";
import { useUserContext } from "@/context";

export default function Home() {
  const myLoader = ({ src, width, quality }: any) => {
    return `${process.env.NEXT_PUBLIC_URL_BASE}${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const { user } = useUserContext();

  const { isVisible } = useMenuContext();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="Generated by hans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${
          isVisible ? "w-[calc(100%)] lg:ml-[280px]" : "w-full"
        } h-full flex  flex-col p-5 mt-14 transition-all`}
      >
        
      </div>
    </>
  );
}
