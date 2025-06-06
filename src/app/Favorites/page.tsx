"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface Filme {
  id: number;
  title: string;
  poster_path?: string;
}

export default function Favoritos() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@filmes");
    setFilmes(minhaLista ? JSON.parse(minhaLista) : []);
  }, []);

  function excluirFilme(id: number) {
    const filtroFilmes = filmes.filter((item) => item.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white px-4 py-10">
      <Toaster position="top-right" />

      <h1 className="text-4xl font-bold text-center mb-10">Meus Filmes</h1>

      {filmes.length === 0 ? (
        <p className="text-center text-gray-300">
          Você não possui nenhum filme no momento.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {filmes.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {item.poster_path ? (
                <div className="relative w-full h-[400px]">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div className="h-[400px] flex items-center justify-center bg-zinc-700 text-gray-400">
                  Sem imagem
                </div>
              )}

              <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                <h2 className="text-lg font-semibold text-center">
                  {item.title}
                </h2>
                <div className="flex gap-2 justify-center mt-auto">
                  <Link
                    href={`/FilmDetail/${item.id}`}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded"
                  >
                    Ver detalhes
                  </Link>
                  <button
                    onClick={() => excluirFilme(item.id)}
                    className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
