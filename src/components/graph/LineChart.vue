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
            }
      },
      data() {
            return {
                  chartData: {
                        
                        labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'],
                        datasets: [
                              {
                                    data: [5, 11, 22, 25, 27, 21, 16, 18],
                                    label: 'Frente de Caixa',
                                    backgroundColor: [
                                          '#83af9b'
                                    ],
                                    borderColor: [
                                          '#83af9b'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              },
                              {
                                    data: [14, 12, 10, 13, 9, 8, 10, 12],
                                    label: 'Padaria',
                                    backgroundColor: [
                                          '#47667b'
                                    ],
                                    borderColor: [
                                          '#47667b'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              },
                              {
                                    data: [0, 7, 5, 6, 5, 8, 7, 8],
                                    label: 'Açougue',
                                    backgroundColor: [
                                          '#fe4365'
                                    ],
                                    borderColor: [
                                          '#fe4365'
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
      }
}
</script>