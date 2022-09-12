<template>
      <div class="uk-panel uk-card-default uk-margin-top" >
            <div class="uk-flex uk-flex-between uk-flex-middle  uk-padding-remove-bottom sig-header">
                  <span class="icon uk-margin-left"><i class="fa-solid fa-chart-area"></i></span>
                  <span class="title uk-margin-top"><h3>Tempo Médio de Atendimento</h3></span>
                  <span class="badge"></span>

            </div>
                  <div class="uk-card-body uk-padding-small" >
                        <line-chart />
                  </div>
            
      </div>
</template>

<script>
      import LineChart from './graph/LineChart.vue';
export default {
      name: 'SigQtdAtendimentoDia',
      components:{
           LineChart 
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