<template>
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
      name: 'BarChart',
      components: { Bar },
      props: {
            chartId: {
                  type: String,
                  default: 'bar-chart'
            },
            datasetIdKey: {
                  type: String,
                  default: 'label'
            },
            width: {
                  type: Number,
                  default: 0
            },
            height: {
                  type: Number,
                  default: 0
            },
            cssClasses: {
                  default: '',
                  type: String
            },
            styles: {
                  type: Object,
                  default: () => { }
            },
            plugins: {
                  type: Object,
                  default: () => { }
            },
            mediaMes: Array,
            dadosOntem: Array,
            vendasHoje: Array
      },
      data() {
            return {
                  chartData: {

                        labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'],
                        datasets: [
                              {
                                    data: this.mediaMes,
                                    label: 'Média Mês',
                                    backgroundColor: [
                                          '#fe4365'
                                    ],
                                    borderColor: [
                                          '#fe4365'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              },

                              {
                                    data: this.dadosOntem,
                                    label: 'Ontem',
                                    backgroundColor: [
                                          '#fc9d9a'
                                    ],
                                    borderColor: [
                                          '#fc9d9a'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              },
                              {
                                    data: this.vendasHoje,
                                    label: 'Dia',
                                    backgroundColor: [
                                          '#83af9b'
                                    ],
                                    borderColor: [
                                          '#83af9b'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              }


                        ]
                  },
                  chartOptions: {
                        responsive: true
                  }
            }
      },
      watch:{
            mediaMes: async function(){
                  await this.Chart.updateChart()
            }, 
            dadosOntem: async function(){
                  await this.Chart.updateChart()
            }, 
            vendasHoje: async function(){
                  await this.Chart.updateChart()
            }, 
            
            
      }
}
</script>