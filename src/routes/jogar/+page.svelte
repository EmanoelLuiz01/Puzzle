<script lang="ts">
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';
  import '../../styles/jogar.css'; 

  // Configuração fixa para o Nível 1
  const imagem = "/images/n1.png"; 
  let grid = 3; // 3x3
  let size = 150; // Tamanho de cada peça em pixels
  
  // Criamos as peças baseadas no ID (0 a 8)
  let tiles = Array.from({ length: grid * grid }, (_, i) => ({ id: i }));

  let firstSelection: number | null = null;
  let showImage = false;

  function shuffle() {
    tiles = [...tiles].sort(() => Math.random() - 0.5);
    firstSelection = null; // Reseta seleção ao embaralhar
  }

  function handleTileClick(index: number) {
    if (firstSelection === null) {
      // Guarda o índice da primeira peça clicada
      firstSelection = index;
    } else {
      // Troca a posição das duas peças no array
      let newTiles = [...tiles];
      [newTiles[firstSelection], newTiles[index]] = [newTiles[index], newTiles[firstSelection]];
      tiles = newTiles;
      
      firstSelection = null; // Limpa a seleção para a próxima jogada
      checkWin();
    }
  }

  function checkWin() {
    // Verifica se cada peça está no seu índice correto
    const won = tiles.every((tile, i) => tile.id === i);
    if (won) {
      setTimeout(() => alert("Parabéns! Você montou "), 300);
    }
  }

  function toggleImage() {
    showImage = !showImage;
  }

  // Embaralha assim que a página carrega
  onMount(shuffle);
</script>
 <div class="background"></div>
<main>
 
  <h1>Nível 1 - </h1>

  <div class="board" style="grid-template-columns: repeat({grid}, {size}px);">
    {#each tiles as tile, i (tile.id)}
      <button 
        animate:flip={{ duration: 400 }}
        class="tile"
        class:selected={firstSelection === i}
        on:click={() => handleTileClick(i)}
        style="
          width: {size}px; 
          height: {size}px;
          background-image: url({imagem});
          background-size: {grid * size}px {grid * size}px;
          background-position: 
            -{ (tile.id % grid) * size }px 
            -{ Math.floor(tile.id / grid) * size }px;
        "
      >
      </button>
    {/each}
  </div>
  

  <div class="controls">
    
    <div class="botoes">
      <a class="menu" href="/">Menu</a>
      <button on:click={toggleImage}> revelar imagem </button>
      <a class="menu" href="/level">Voltar</a>
    </div>
  </div>

  {#if showImage}
    <div class="modal-overlay" on:click={toggleImage}>
      <div class="modal-box" on:click|stopPropagation>
        <img src={imagem} alt="Imagem do quebra-cabeça" />
        <button class="close-modal" on:click={toggleImage}>✕</button>
      </div>
    </div>
  {/if}
</main>