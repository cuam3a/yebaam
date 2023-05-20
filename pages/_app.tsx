import "../styles/index.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { MenuProvider, UserProvider } from "@/context";
import { useEffect } from "react";
import { AxiosInterceptor } from "@/api/api";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN}`)) {
      router.replace("/login");
    }

    if (
      router.asPath.includes("login") &&
      localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN}`)
    ) {
      router.replace("/");
    }
  }, []);
  return (
    <UserProvider>
      <MenuProvider>
        <NextNProgress
          color="#F54592"
          height={2}
          startPosition={0.2}
          showOnShallow={true}
        />
        <AxiosInterceptor>
          <main className="w-full h-[100%] flex relative">
            <Component {...pageProps} />
          </main>
        </AxiosInterceptor>
      </MenuProvider>
    </UserProvider>
  );
}
