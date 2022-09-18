<template>
      <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, LinearScale, PointElement, LineElement, CategoryScale)

export default {
      name: 'LineChart',
      components: { Line },
      props: {
            chartId: {
                  type: String,
                  default: 'line-chart'
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
            titulo: String,
            myData: Array
      },
      data() {
            return {
                  chartData: {
                        
                        labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'],
                        datasets: [
                              {
                                    data: this.myData,
                                    label: this.titulo,
                                    backgroundColor: [
                                          '#83af9b'
                                    ],
                                    borderColor: [
                                          '#83af9b'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              }
                        ]
                  },
                  chartOptions: {
                        responsive: true
                  }
            }
      },
      unmounted(){

      },
      watch:{
            myData: async function(){
                  await this.Chart.updateChart()
            }
            
      }
}
</script>