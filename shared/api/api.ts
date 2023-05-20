import { useLayoutEffect, useEffect } from "react";
import axios from "axios";

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
});

const AxiosInterceptor = ({ children }: any) => {
  useIsomorphicLayoutEffect(() => {
    const resInterceptor = (response: any) => {
      return response.data;
    };

    const errInterceptor = (error: any) => {
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const reqInterceptor = (request: any) => {
      if (localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN}`)) {
        request.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`;
      }
      return request;
    };

    const errInterceptor = (error: any) => {
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.request.use(
      reqInterceptor,
      errInterceptor
    );
    return () => instance.interceptors.request.eject(interceptor);
  }, [`${process.env.NEXT_PUBLIC_TOKEN}`]);

  return children;
};

export default instance;
export { AxiosInterceptor };
