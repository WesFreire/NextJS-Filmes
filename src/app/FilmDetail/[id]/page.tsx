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
      } catch (error) {
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
    let filmesSalvos: Filme[] = minhaLista ? JSON.parse(minhaLista) : [];

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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">Carregando...</p>
      </div>
    );
  }

  if (!filme) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">Filme não encontrado</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold text-center mb-6">{filme.title}</h1>

      {filme.backdrop_path && (
        <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
            alt={filme.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">Sinopse</h2>
      <p className="text-gray-700 mb-4">{filme.overview}</p>

      <p className="text-lg font-medium mb-6">
        Avaliação:{" "}
        <span className="text-yellow-600">{filme.vote_average} / 10</span>
      </p>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={salvarFilme}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Salvar
        </button>
        <a
          href={`https://youtube.com/results?search_query=${encodeURIComponent(
            filme.title + " Trailer"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Trailer
        </a>
      </div>
    </div>
  );
}
