<template>
      <Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
      name: 'PieChart',
      components: { Pie },
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
            }
      },
      data() {
            return {
                  chartData: {

                        labels: ['Açougue', 'Frios', 'Hortfruit', 'Bebidas', 'Padaria', 'Higiene'],
                        datasets: [{
                              label: 'My First Dataset',
                              data: [54, 50, 100, 26, 48, 35],
                              backgroundColor: [
                                    '#fe4365',
                                    '#fc9d9a',
                                    '#f9cdad',
                                    '#c8c8a9',
                                    '#83af9b',
                                    '#47667b'
                              ],
                              hoverOffset: 2
                        }]
                  },
                  chartOptions: {
                        radius: '80%',
                        responsive: true,
                        layout: {
                              autoPadding: false,
                              padding: 0
                        }
                  }
            }
      }
}
</script>