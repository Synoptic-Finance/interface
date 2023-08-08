import "@/styles/globals.css";
import Header from "@/ui/header";
import { inter, nunitoSans } from "@/utils/fonts";
import type { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const LoadingComponent = () => (
  <div
    className={`flex justify-center items-center gap-10 m-auto w-screen min-h-screen animate-splash ${nunitoSans.variable}`}
  >
    <Image src="/images/logo.svg" width={70} height={70} alt="logo" />
    <span className="capitalize text-[2em] lg:text-[2.5em] font-nunitoSans">
      synoptic finance
    </span>
  </div>
);

const AppContent = ({ children }: any) => {
  return (
    <main
      className={`w-screen min-h-screen flex justify-start flex-col items-center bg-[#fff] overflow-hidden scroll-smooth gap-0 ${nunitoSans.variable} ${inter.variable}`}
    >
      <Header />
      {children}
    </main>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
      )}
    </>
  );
}
