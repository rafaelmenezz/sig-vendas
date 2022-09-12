<template>
      <div class="uk-panel uk-box-shadow-medium uk-margin-top">
            <div class="uk-flex uk-flex-between uk-flex-middle  uk-padding-remove-bottom sig-header">
                  <span class="icon uk-margin-left"><i class="fa-solid fa-users"></i></span>
                  <span class="title uk-margin-top">
                        <h3>Operação</h3>
                  </span>
                  <span class="badge"></span>

            </div>
            <table
                  class="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-width-1-1 uk-height-small">


                  <thead>

                        <tr>
                              <th class="uk-width-small">status</th>
                              <th class="uk-width-small">PA</th>
                              <th>Atendente</th>
                              <th>Jornada Inicio</th>
                              <th>Jornada Fim</th>
                        </tr>
                  </thead>
                  <tbody class="">
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Atendendo"></div>
                              </td>
                              <td>01</td>
                              <td>Ronaldo Nazário</td>
                              <td>08:00</td>
                              <td>17:00</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status ausente" uk-tooltip="title: Inativo"></div>
                              </td>
                              <td>02</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status ausente" uk-tooltip="title: Inativo"></div>
                              </td>
                              <td>03</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status ausente" uk-tooltip="title: Inativo"></div>
                              </td>
                              <td>04</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>
                              <td>05</td>
                              <td>Ana Carolina Matos</td>
                              <td>10:30</td>
                              <td>16:30</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Ocupado"></div>
                              </td>
                              <td>06</td>
                              <td>Gilvan Rocha</td>
                              <td>10:00</td>
                              <td>16:00</td>

                        </tr>
                        <tr>
                              <td>
                                    <div class="status ausente" uk-tooltip="title: Inativo"></div>
                              </td>
                              <td>07</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>

                        </tr>

                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>
                              <td>09</td>
                              <td>Adriano Imperador</td>
                              <td>08:00</td>
                              <td>17:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>

                              <td>10</td>
                              <td>Alessandra Negrini</td>
                              <td>09:00</td>
                              <td>15:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status ausente" uk-tooltip="title: Livre"></div>
                              </td>
                              <td>11</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status pausa" uk-tooltip="title: Em Pausa"></div>
                              </td>
                              <td>12</td>
                              <td>Paola Oliveira</td>
                              <td>12:00</td>
                              <td>22:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Ocupado"></div>
                              </td>
                              <td>13</td>
                              <td>Thiago Vieira</td>
                              <td>12:00</td>
                              <td>18:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>
                              <td>14</td>
                              <td>Martha Silva</td>
                              <td>12:00</td>
                              <td>22:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Ocupado"></div>
                              </td>
                              <td>15</td>
                              <td>Sueli Martins</td>
                              <td>12:00</td>
                              <td>22:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Ocupado"></div>
                              </td>
                              <td>16</td>
                              <td>Jefferson Miranda</td>
                              <td>12:00</td>
                              <td>22:00</td>
                        </tr>

                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>

                              <td>18</td>
                              <td>Ana Maria Ramos</td>
                              <td>14:00</td>
                              <td>20:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status livre" uk-tooltip="title: Livre"></div>
                              </td>

                              <td>19</td>
                              <td>Gabriel Lisboa</td>
                              <td>14:00</td>
                              <td>20:00</td>
                        </tr>
                        <tr>
                              <td>
                                    <div class="status ocupado" uk-tooltip="title: Ocupado"></div>
                              </td>

                              <td>20</td>
                              <td>Douglas Martins</td>
                              <td>14:00</td>
                              <td>20:00</td>
                        </tr>

                  </tbody>
            </table>

      </div>

</template>

<script>
export default {
      name: 'SigAtendimento'
}
</script>

<style scoped>
a {
      font-weight: 900;
}

i {
      font-size: 1.5em;
}

.sig-header {
      border-bottom: 1px solid #ccc;
}


div.status {
      margin: 0 auto;
      width: 32px;
      min-height: 32px;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;

}

.ausente {
      border-color: #ccc;
      background-color: #ccc;

}

.ocupado {
      border-color: red;
      background-color: red;

}

.livre {

      border-color: var(--verde1);
      background-color: var(--verde1);
}

.pausa {
      border-color: var(--amarelo1);
      background-color: var(--amarelo1);
}

th,
td {
      text-align: center
}

th:nth-child(1),
th:nth-child(2) {
      width: 10%
}

caption {
      font-size: 1.8em;
      padding: 20px;
}

.my-class {
      max-height: 325px;
}

.tb-height {
      max-height: 300px;
}
</style>