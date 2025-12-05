<script lang="ts">
  import { goto } from '$app/navigation';

  const tamanho = 3;
  const tamanhoPeca = 100;
  let pecas: number[] = [];

  let arrastando: number | null = null;

  function embaralhar() {
    pecas = Array.from({ length: tamanho * tamanho }, (_, i) => i);
    pecas.sort(() => Math.random() - 0.5);
  }

  function iniciarArraste(indice: number) {
    arrastando = indice;
  }

  function soltar(indice: number) {
    if (arrastando === null || arrastando === indice) return;

    // Troca as peças
    [pecas[arrastando], pecas[indice]] = [pecas[indice], pecas[arrastando]];
    arrastando = null;

    // Verifica se está resolvido
    if (pecas.every((val, i) => val === i)) {
      alert("Parabéns! Quebra-cabeça resolvido!");
    }
  }

  embaralhar();
</script>

<style>
  .tabuleiro {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 2px;
    background-color: #fef3c7;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .peca {
    width: 100px;
    height: 100px;
    background-image: url('/imagem.jpg');
    background-size: 300px 300px;
    border: 1px solid #d1d5db;
    box-sizing: border-box;
    cursor: grab;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #e5e7eb;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-right: 1rem;
  }

  button:hover {
    background-color: #d1d5db;
  }

  .menu {
    color: #4b5563;
    text-decoration: none;
    font-weight: bold;
  }
</style>

<h2>Monte o quebra-cabeça!</h2>
<div class="tabuleiro">
{#each pecas as peca, i}
  <div
    class="peca"
    draggable="true"
    role="button"
    tabindex="0"
    on:dragstart={() => iniciarArraste(i)}
    on:dragover|preventDefault
    on:drop={() => soltar(i)}
    style="background-position: ${-(peca % tamanho) * tamanhoPeca}px ${-Math.floor(peca / tamanho) * tamanhoPeca}px"
  >
    {peca + 1}
  </div>
{/each}
</div>

<button on:click={embaralhar}>Embaralhar</button>
<a class="menu" href="/">Voltar ao Menu</a>
