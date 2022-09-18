<template>
      <div class="setores">
            <section class="uk-flex uk-flex-row uk-box-shadow-medium">
                  <fieldset class="uk-width-2-3">
                        <legend>Setor</legend>
                        <select class="uk-select" @change="grafico" v-model="nomeSetor">
                              <option v-for="item in sigSetores" :key="item">{{item}}</option>
                        </select>
                  </fieldset>
                  <fieldset class="uk-width-1-3 uk-padding-remove uk-flex">
                        <legend>Data</legend>
                        <input class="date" type="date" v-model="dataHoje" @change="grafico" />
                  </fieldset>
            </section>
            <section class="grafico uk-box-shadow-medium uk-flex" v-if="nomeSetor">
                  <fieldset class="uk-width-1-2 uk-padding-small ">
                        <legend>{{nomeSetor + ' - Tempo Médio de Atendimento'}}</legend>
                        <line-chart ref="line" :chartId="'line'" :titulo="nomeSetor" :myData="myData" />
                  </fieldset>
                  <fieldset class="uk-width-1-2 uk-padding-small ">
                        <legend>{{nomeSetor + ' - Vendas Por Hora'}}</legend>
                        <bar-chart ref="bar" :chartId="'bar'" :titulo="nomeSetor" :media-mes="mediaMes" :dadosOntem="dadosOntem" :vendasHoje="vendasHoje"/>
                  </fieldset>
            </section>
      </div>
</template>

<script>
import LineChart from '@/components/graph_setores/LineChart.vue';
import BarChart from '@/components/graph_setores/BarChart.vue';
import { setores, dadosGraph } from '@/components/util/setores.js'


export default {
      name: 'SigSetores',
      components: {
            LineChart,
            BarChart
      },
      data() {
            return {
                  sigSetores: setores,
                  nomeSetor: '',
                  myData: [],
                  dataHoje: '',
                  mediaMes: [],
                  dadosOntem: [],
                  vendasHoje: [],
                  tamanhoArray: 8
            }
      },
      methods: {
            async grafico() {

                  this.$refs.line.chartData.datasets[0].label = this.nomeSetor
                  let i1 = Math.floor(Math.random() * this.tamanhoArray)
                  let i2 = Math.floor(Math.random() * this.tamanhoArray)
                  let i3 = Math.floor(Math.random() * this.tamanhoArray)
                  let i4 = Math.floor(Math.random() * this.tamanhoArray)
                  this.$refs.line.chartData.datasets[0].data = dadosGraph[i1]
                  this.$refs.bar.chartData.datasets[0].data = dadosGraph[i2]
                  this.$refs.bar.chartData.datasets[1].data = dadosGraph[i3]
                  this.$refs.bar.chartData.datasets[2].data = dadosGraph[i4]

            },
            hoje() {
                  const d = new Date();
                  let mes = '0' + (d.getMonth() + 1)
                  this.dataHoje = d.getFullYear() + '-' + mes + '-' + d.getDate()
                  console.log(this.dataHoje)
            },
           async loadMediaMes() {
                  let indice = Math.floor(Math.random() * this.tamanhoArray)
                  this.mediaMes =  dadosGraph[indice]
            },
            async loadDadosOntem() {
                  let indice = Math.floor(Math.random() * this.tamanhoArray)
                  this.dadosOntem =  dadosGraph[indice]
            },
            async loadVendasHoje() {
                  let indice = Math.floor(Math.random() * this.tamanhoArray)
                  this.vendasHoje =  dadosGraph[indice]
            },
            async loadDadosGraph() {
                  let indice = Math.floor(Math.random() * this.tamanhoArray)
                  this.myData = dadosGraph[indice]
            }
      },
      mounted() {
            this.hoje()
            this.loadMediaMes()
            this.loadDadosOntem()
            this.loadVendasHoje()
            this.loadDadosGraph()

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

.setores {
      width: 100%;
      padding: 20px;
}

.grafico {
      margin-top: 25px;
}

fieldset {
      margin: 0;
      min-height: 50px;
}

legend {
      margin: 0 5px;
      padding: 0 10px;
      font-size: 1.4em;
}

select {
      border: none;
      min-height: 25px;
      font-size: 1.6em;
}

option {
      font-size: 1em;
}

input.date {

      width: 100%;
      border: none;
      font-size: 1.6em;
      text-align: center;
      font-family: "Cormorant";
}
</style>