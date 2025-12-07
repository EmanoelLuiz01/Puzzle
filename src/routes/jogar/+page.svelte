<script lang="ts">
  // puzzle inicial com imagens da pasta static/images
  let arr: string[][] = [
    ["/images/11.png", "/images/22.png", "/images/33.png"],
    ["/images/44.png", "/images/55.png", "/images/66.png"],
    ["/images/77.png", "/images/88.png", "/images/99.png"]
  ];

  const conjuntoBackup = [
    ["11", "22", "33"],
    ["44", "55", "66"],
    ["77", "88", "99"]
  ];

  let primeira: [number, number] | false = false;
  let segunda: [number, number] | false = false;
  let mostrarAlerta = false;
  let mostrarGabarito = false;

  function selecionarPeca(pos: [number, number]) {
    if (!primeira) {
      primeira = pos;
    } else if (!segunda) {
      segunda = pos;
      trocarPosi(primeira, segunda);
    }
  }

  function trocarPosi(pos1: [number, number], pos2: [number, number]) {
    const backup = arr[pos1[0]][pos1[1]];
    arr[pos1[0]][pos1[1]] = arr[pos2[0]][pos2[1]];
    arr[pos2[0]][pos2[1]] = backup;
    arr = [...arr];

    primeira = false;
    segunda = false;

    // validação
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        const nome = arr[i][j].split('/').pop()?.replace('.png', '');
        if (conjuntoBackup[i][j] !== nome) {
          return;
        }
      }
    }

    mostrarSucesso()
  }

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function embaralhar() {
    const flat = arr.flat();
    shuffleArray(flat);
    arr = [
      flat.slice(0, 3),
      flat.slice(3, 6),
      flat.slice(6, 9)
    ];
  }

  function gabarito() {
    mostrarGabarito = true;
  }
  function mostrarSucesso() : void {
    mostrarAlerta = true;
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .Caixa { /* CONTAINER PRINCIPAL AJUSTADO */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #f3f4f6;
    margin-top: -100px;
  }

  /* GRID DO PUZZLE AJUSTADO */
  #table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 15px;
    padding: 15px;
    gap: 4px;
    box-shadow: 0px 0px 5px black;
    position: relative;
  }

  .peca {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .peca img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


  .modal { /*MODAL DO GABARITO*/
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    background: white;
    border: 2px solid #170d2f;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
    text-align: center;
    z-index: 1000;
  }

  .modal h2 {
    margin-bottom: 0.5rem;
    color: #10b981;
  }

  .modal button { /* BOTÃO FECHAR MODAL GABARITO */
    display: block;
    font-size: 15px;
  width: 120px;           
  background-color: lightgrey;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 5px 0;
  border-radius: 15px;
  border: none;          
  cursor: pointer;
  margin: 0 auto;
  margin-top: 1rem;
  }
  .modal button:hover {
    background-color: grey;
    color: white;
  }

  .gabarito-grid {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    gap: 5px;
    justify-content: center;
  }

  .gabarito-grid img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #ccc;
  }
 /* container dos botões: linha horizontal, centralizados */
.botoes {
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
}

/* BOTÕES E LINK COMO BOTÃO E MESMO VISUAL DAS OUTRAS PAGINAS */
.botoes button,
.botoes a {
  display: block;
  font-size: 20px;
  width: 120px;           
  background-color: lightgrey;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 5px 0;
  border-radius: 15px;
  border: none;          
  cursor: pointer;
}
.botoes button:hover,
.botoes a:hover {
  background-color: grey;
  color: white;
}


</style>

<div class="Caixa"> <!-- CONTAINER PRINCIPAL QUE APARECE TUDO-->
  <div id="table">
    {#each arr as linha, i}
      {#each linha as peca, j}
        <div
          class="peca"
          role="button"
          tabindex="0"
          on:click={() => selecionarPeca([i,j])}
          on:keydown={(e) => e.key === 'Enter' && selecionarPeca([i,j])}
        >
          <img src={peca} alt="peca" />
        </div>
      {/each}
    {/each}
  </div>

  <div class="botoes">
    <button class="refresh" on:click={embaralhar}>Embaralhar</button>
    <button class="gabarito" on:click={gabarito}>Gabarito</button>
    <a class="menu" href="/">Menu</a>
  </div>
</div> <!-- FIM DO CONTAINER PRINCIPAL-->


{#if mostrarAlerta}
  <div class="modal">
    <h2>🎉 PARABÉNS!!</h2>
    <p>VOCÊ CONSEGUIU!!</p>
    <button on:click={() => mostrarAlerta = false}>Fechar</button>
  </div>
{/if}

<!--ONDE MOSTRA O GABARITO: MODAL-->
{#if mostrarGabarito}
  <div class="modal">
    <h2>Gabarito</h2>
    <div class="gabarito-grid">
      <img src="/images/11.png" alt="11" />
      <img src="/images/22.png" alt="22" />
      <img src="/images/33.png" alt="33" />
      <img src="/images/44.png" alt="44" />
      <img src="/images/55.png" alt="55" />
      <img src="/images/66.png" alt="66" />
      <img src="/images/77.png" alt="77" />
      <img src="/images/88.png" alt="88" />
      <img src="/images/99.png" alt="99" />
    </div>
    <button on:click={() => mostrarGabarito = false}>Fechar</button>
  </div>
{/if}
