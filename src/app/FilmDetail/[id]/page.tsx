"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "../../../services/api";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface Filme {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

export default function FilmePage() {
  const { id } = useParams();
  const router = useRouter();
  const [filme, setFilme] = useState<Filme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "99ef35a1fa028e3838d31788d996fbc9",
            language: "pt-BR",
          },
        });
        setFilme(response.data);
      } catch {
        console.error("Filme não encontrado");
        router.push("/");
      } finally {
        setLoading(false);
      }
    }

    if (id) loadFilme();
  }, [id, router]);

  function salvarFilme() {
    if (!filme) return;

    const minhaLista = localStorage.getItem("@filmes");
    const filmesSalvos: Filme[] = minhaLista ? JSON.parse(minhaLista) : [];

    if (filmesSalvos.some((f) => f.id === filme.id)) {
      toast.error("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-xl font-semibold text-white">Carregando...</p>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-xl text-red-500">Filme não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">{filme.title}</h1>

        {filme.backdrop_path && (
          <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden shadow-lg bg-black">
            <Image
              src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
              alt={filme.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        )}

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Sinopse</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">{filme.overview}</p>

          <p className="text-lg font-medium mb-6">
            Avaliação:{" "}
            <span className="text-yellow-400">{filme.vote_average} / 10</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={salvarFilme}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-md font-medium"
            >
              Salvar
            </button>
            <a
              href={`https://youtube.com/results?search_query=${encodeURIComponent(
                filme.title + " Trailer"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-md font-medium"
            >
              Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
