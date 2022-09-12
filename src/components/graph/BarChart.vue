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
            }
      },
      data() {
            return {
                  chartData: {

                        labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'],
                        datasets: [
                              {
                                    data: [12, 13, 17, 25, 27, 21, 22, 16, 12],
                                    label: 'Açougue',
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
                                    data: [22, 16, 12, 13, 18, 16, 17, 23, 18],
                                    label: 'Frios',
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
                                    data: [5, 10, 15, 17, 21, 23, 20, 19, 17],
                                    label: 'Bebidas',
                                    backgroundColor: [
                                          '#83af9b'
                                    ],
                                    borderColor: [
                                          '#83af9b'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              },

                              {
                                    data: [11, 13, 19, 22, 25, 24, 18, 17, 21],
                                    label: 'Hortfruti',
                                    backgroundColor: [
                                          '#f9cdad'
                                    ],
                                    borderColor: [
                                          '#f9cdad'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              },
                              {
                                    data: [27, 15, 9, 8, 7, 8, 13, 16, 24],
                                    label: 'Padaria',
                                    backgroundColor: [
                                          '#47667b'
                                    ],
                                    borderColor: [
                                          '#47667b'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    mmaxBarLength: 25,
                              },
                              {
                                    data: [3, 7, 8, 11, 6, 5, 6, 6, 9],
                                    label: 'Higiene',
                                    backgroundColor: [
                                          '#4b3132',
                                    ],
                                    borderColor: [
                                          '#4b3132',
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
      }
}
</script>