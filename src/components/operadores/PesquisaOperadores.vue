<template>
      <div class="uk-padding">
            <section class="pesquisa uk-flex uk-flex-center uk-width-1-1 uk-margin-medium uk-box-shadow-medium ">
                  <span class="label">Pesquisar</span>
                  <input class="uk-input sig-input" type="text" />
            </section>
            <section class="uk-width-1-1 uk-margin-medium uk-box-shadow-medium">
                  <tb-operadores />
            </section>
      </div>

</template>

<script>
import TbOperadores from './TbOperadores.vue';
export default {
      name: 'PesquisaOperadores',
      components: {
            TbOperadores
      }

}
</script>

<style scoped>
section {
      position: relative;
      width: 100%;
      padding: 20px;
      grid-gap: 30px;
}


.pesquisa {
      padding: 30px;
}

.pesquisa .label {
      margin-right: 15px;
      font-weight: 700;
      font-size: 1.8em;
}

.sig-input {
      border-left: none;
      border-right: none;
      border-top: none;
      font-size: 1.5em;
}
</style>