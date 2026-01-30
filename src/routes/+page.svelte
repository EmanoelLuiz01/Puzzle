<script lang="ts">
  let tituloDoJogo = "Igarabits";
  let modalAberta = false;
</script>

<div class="menu-container">
  <h1 class="title">{tituloDoJogo}</h1> 
  
  <a class="menu" href="/level">Jogar</a>
  <a class="menu" href="/sobre">Sobre</a>

  <!-- Botão que abre a modal -->
  <button class="menu" on:click={() => modalAberta = true}>
    Sobre o Jogo
  </button>
</div>

{#if modalAberta}
  <div class="modal">
    <div class="modal-box">
      <h2>Sobre o jogo</h2>
      <p>Emanoel a Fera</p>

      <button on:click={() => modalAberta = false}>
        Fechar
      </button>
    </div>
  </div>
{/if}