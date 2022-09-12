<template>
      <div class="uk-panel uk-card-default uk-margin-top" >
            <div class="uk-flex uk-flex-between uk-flex-middle  uk-padding-remove-bottom sig-header">
                  <span class="icon uk-margin-left"><i class="fa-solid fa-chart-pie"></i></span>
                  <span class="title uk-margin-top"><h3>Vendas Por Seção</h3></span>
                  <span class="badge"></span>

            </div>
                  <div class=" uk-padding-remove "  >
                        <pie-chart  class="uk-width-2-3 uk-margin-auto"/>
                  </div>
            
      </div>
</template>

<script>
      import PieChart from './graph/PieChart.vue';
export default {
      name: 'SigSetoresDia',
      components:{
           PieChart 
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