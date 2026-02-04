<script lang="ts">
  let tituloDoJogo = "Igarabits";
  let modalAberta = false;
</script>

<div class="menu-container">
  <h1 class="title">{tituloDoJogo}</h1>

  <a class="menu" href="/level">Jogar</a>
  <a class="menu" href="/sobre">Discentes</a>

  <!-- Botão que abre a modal -->
  <button class="menu" on:click={() => (modalAberta = true)}>
    Sobre o Jogo
  </button>
</div>

{#if modalAberta}
  <div class="modal">
    <div class="modal-box">
      <h2>Sobre o jogo</h2>
      <p>
        O jogo <strong>Canoa Grande</strong> é um quebra-cabeça inspirado na
        cidade de Igarassu (PE). Ele possui três níveis, cada um representando
        partes importantes da cidade, valorizando sua cultura e história de
        forma interativa. O projeto foi desenvolvido com base em referências
        de interfaces e puzzles, como o
        <a
          href="https://viviengaluchot.github.io/svelte-kit-img-shuffle/?t=custom"
          target="_blank"
        >
          img-shuffle
        </a>
        e o
        <a
          href="https://github.com/bersling/sveltepuzzle/tree/master"
          target="_blank"
        >
          sveltepuzzle
        </a>.
        Também tivemos a ajuda de
        <a
          href="https://github.com/AlysonDEV"
          target="_blank"
        >
          AlysonDEV
        </a>,
        que, de bom grado, auxiliou na resolução de alguns problemas enfrentados
        durante o desenvolvimento do projeto.
        Além disso, criamos
        <a
          href="https://www.youtube.com/@NoelVascodaGamar"
          target="_blank"
        >
          canal Noel Vasco da Gama R.
        </a>,
        onde foram passadas dicas importantes para os estudantes, tanto os que
        participaram do projeto quanto os demais.
      </p>

      <button on:click={() => (modalAberta = false)}>
        Fechar
      </button>
    </div>
  </div>
{/if}

