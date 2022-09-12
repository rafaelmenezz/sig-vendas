<template>
      <div class="uk-panel uk-card-default uk-margin-top" >
            <div class="uk-flex uk-flex-between uk-flex-middle  uk-padding-remove-bottom sig-header">
                  <span class="icon uk-margin-left"><i class="fa-solid fa-chart-column"></i></span>
                  <span class="title uk-margin-top"><h3>Total em Vendas Por Hora <span class="uk-text-meta">Em Milhares</span></h3></span>
                  <span class="badge"></span>

            </div>
                  <div class="uk-card-body uk-padding-small uk-width-1-1 " >
                        <bar-chart  class="uk-height-large"/>
                  </div>
            
      </div>
</template>

<script>
      import BarChart from './graph/BarChart.vue';
export default {
      name: 'SigVendasPorHoraDia',
      components:{
           BarChart 
      }
}
</script > 

<style scoped>
      .sig-header{
      border-bottom: 1px solid #ccc;
}
i {
     font-size: 1.5em;
}



</style>