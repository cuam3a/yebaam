import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  isVisibleLogin: boolean;
  setIsVisibleLogin: (e: boolean) => void;
  submit: ({}) => void;
  loading: boolean;
  setLoading: (e: boolean) => void;
};

export default function index({
  isVisibleLogin,
  setIsVisibleLogin,
  submit,
  loading,
  setLoading,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="md:px-36 p-5 rounded flex flex-col justify-center">
      <h2 className="text-subheading-01 font-bold mb-2 text-4xl">Encuentra</h2>
      <h2 className="text-subheading-01 font-extrabold mb-2 text-4xl text-green">
        todo lo que buscas
      </h2>
      <h2 className="text-subheading-01 text-gray mt-2 text-lg">
        Somos una red social fresca, confiable y segura
      </h2>
      <h2 className="text-subheading-01 font-bold text-gray mb-2 text-lg">
        Yabaam, busca menos y encuentra más!
      </h2>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image width={20} height={20} src="/icons/alien_ico.png" alt="" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-graylight border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Ingrese tu correo electronico o número de teléfono"
        />
      </div>
      <div className="flex">
        <input
          type="text"
          className="rounded-none rounded-l-lg text-center bg-graylight border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingresa tu contraseña"
        />
        <span className="inline-flex justify-center items-center px-3 text-center text-white bg-green border border-l-0 border-gray rounded-r-md w-20">
          <Image width={25} height={20} src="/icons/ufo_ico.png" alt="" />
        </span>
      </div>
      <p className="flex justify-end my-2">
        <a className="text-gray" href="#">¿Olvidaste tu contraseña?</a>
      </p>
      <div className="flex justify-center items-center my-2">
      <button type="button" className="text-gray font-bold px-10 bg-green focus:ring-4 focus:ring-blue-300 rounded-lg text-sm py-2.5 mr-2 mb-2 focus:outline-none">Registrarse</button>
      </div>
    </div>
  );
}
