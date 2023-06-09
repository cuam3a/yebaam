import Head from "next/head";
//import Modal from "@/elements/molecules/Modal";
import LoginForm from "@/elements/molecules/LoginForm";
//import RegisterForm from "@elements/molecules/RegisterForm";
import { useEffect, useState } from "react";
import Image from "next/image";
//import background from "@public/images/background-home.jpg";
import { useLoginService } from "../../shared/services/login.service";
import { useRouter } from "next/router";
import { useUserContext } from "@/context";

export default function Login() {
  const [isVisibleLogin, setIsVisibleLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { useLogin } = useLoginService();
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const myLoader = ({ src, width, quality }: any) => {
    return `${process.env.NEXT_PUBLIC_URL_BASE}${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const useSignup = async (body: object) => {
    try {
      const resp: any = await useLogin(body);
      localStorage.setItem(`${process.env.NEXT_PUBLIC_TOKEN}`, resp.token);
      localStorage.setItem("user-redsocial", JSON.stringify(resp));
      setUser(resp);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      <main className="w-full h-screen justify-center bg-white">
        <div className="w-full h-20 bg-green mt-14">
          <Image
            src="/images/logo.jpeg"
            width={225}
            height={230}
            alt="logo"
            className="ml-20"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="basis-1/2 justify-center">
            <LoginForm
              isVisibleLogin={isVisibleLogin}
              setIsVisibleLogin={setIsVisibleLogin}
              submit={useSignup}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
          <div className="basis-1/2 flex justify-center items-center">
              <Image src="/images/login.jpeg" alt="" width={600} height={100} />
          </div>
        </div>
      </main>
    </>
  );
}
