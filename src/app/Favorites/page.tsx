"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface Filme {
  id: number;
  title: string;
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
    <main className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold text-center mb-6">Meus Filmes</h1>

      {filmes.length === 0 ? (
        <p className="text-center text-gray-600">
          Você não possui nenhum filme no momento.
        </p>
      ) : (
        <ul className="space-y-4">
          {filmes.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="font-medium text-lg">{item.title}</span>
              <div className="flex gap-2">
                <Link
                  href={`/FilmDetail/${item.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Ver detalhes
                </Link>
                <button
                  onClick={() => excluirFilme(item.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
