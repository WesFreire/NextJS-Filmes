"use client";
import { useEffect, useState } from "react";
import api from "../services/api";
import Link from "next/link";
import Image from "next/image";

// Tipo para um filme
interface Filme {
  id: number;
  title: string;
  poster_path: string;
}

// Tipo para a resposta da API
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
      <div className="flex justify-center items-center mt-5">
        <h2 className="text-2xl">Carregando Filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filmes.map((filme) => (
            <article
              key={filme.id}
              className="w-full bg-white p-4 rounded-md shadow-md"
            >
              <strong className="block text-center text-xl mb-4 font-semibold">
                {filme.title}
              </strong>
              <div className="relative w-full h-96">
                <Image
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt={filme.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <Link
                href={`/FilmDetail/${filme.id}`}
                className="flex justify-center items-center py-2 text-white bg-blue-600 text-xl rounded-b-lg hover:bg-blue-700 transition-colors"
              >
                Acessar
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
