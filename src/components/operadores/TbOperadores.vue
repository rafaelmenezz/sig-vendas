<template>

      <table class="uk-table uk-table-divider uk-table-striped uk-table-small uk-table-middle">
            <thead>
                  <th>Foto</th>
                  <th class="uk-text-center">Status</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Contato</th>
                  <th>Jornada de Trabalho</th>
                  <th>TMA</th>
                  <th>Média de Vendas</th>
            </thead>
            <tbody>
                  <tr v-for="item in ops" :key="item.id">
                        
                        <td><div class="userBx"><img :src="require(`@/assets/operadores/${item.foto}`)" width="32" height="32" alt="" /></div></td>
                        <td><div class="status uk-margin-auto" :class="item.status"></div></td>
                        <td>{{item.nome}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.contato}}</td>
                        <td>{{item.horario_inicio + ' às ' + item.horario_fim }}</td>
                        <td>{{item.tma}}</td>
                        <td>{{'R$ ' + item.media_vendas}}</td>
                  </tr>
            </tbody>
      </table>

</template>

<script>
import { operadores } from '@/components/util/operadores.js'
export default {
      name: 'TbOperadores',
      data() {
            return {
                  ops: []
            }
      },
      methods: {
            addOperadores() {
                  this.ops = operadores
            }
      },
      mounted() {
            this.addOperadores()
      }
}
</script>

<style scoped>
.userBx {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
}

.userBx img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

}
.status{
      width: 32px;
      height: 32px;
      border-radius: 50%;
}
.disponivel{
      background-color: var(--azul);
}
.ferias{
      background-color: tomato;
}
.atestado{
      background-color: burlywood;
}
</style>