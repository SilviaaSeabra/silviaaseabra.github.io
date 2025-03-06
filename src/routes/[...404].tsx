import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <p class="m-4">OOps, página não encontrada</p>
      <p>
        <A
          href="/"
          class="transition-all cursor-pointer px-4 py-2 bg-blue-400 hover:bg-blue-500 hover:scale-105 active:scale-95"
        >
          Voltar para a página inicial
        </A>
      </p>
    </main>
  );
}
