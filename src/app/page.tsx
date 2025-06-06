"use client";
import { useEffect, useState } from "react";
import api from "../services/api";
import Link from "next/link";
import Image from "next/image";

interface Filme {
  id: number;
  title: string;
  poster_path: string;
}

interface FilmeAPIResponse {
  results: Filme[];
}

function Home() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get<FilmeAPIResponse>("/movie/now_playing", {
          params: {
            api_key: "99ef35a1fa028e3838d31788d996fbc9",
            language: "pt_BR",
            page: 1,
          },
        });

        setFilmes(response.data.results.slice(0, 30));
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <h2 className="text-2xl text-white">Carregando Filmes...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filmes.map((filme) => (
            <article
              key={filme.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-80">
                <Image
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt={filme.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <strong className="block text-center text-lg font-semibold mb-2 line-clamp-2">
                  {filme.title}
                </strong>
                <Link
                  href={`/FilmDetail/${filme.id}`}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Acessar
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
