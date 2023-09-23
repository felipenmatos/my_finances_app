//import Image from "next/image";

export default function Home() {
  return (
    <div className="flex row h-full ">
      <div className="w-3/6 h-screen flex flex-col items-center  bg-white">
        <img
          src="https://a.imagem.app/o3hgSZ.png"
          alt="logo"
          className="w-56 mt-36"
        />
        <h1 className="mt-12 text-black text-3xl">Login</h1>
        <form className="flex flex-col items-center gap-2">
          <input
            type="text"
            className="mt-5 w-80 h-10 rounded-xl border border-amber-600"
            placeholder="E-mail"
          />
          <input
            type="password "
            className="mt-5 w-80 h-10 rounded-xl border border-amber-600"
            placeholder="Senha"
          />
        </form>
      </div>
      <div className="w-3/6 h-screen flex bg-[url('https://a.imagem.app/oodIbS.jpeg')] bg-cover bg-center bg-no-repeat ">
        <p>Olá</p>
      </div>
    </div>
  );
}
