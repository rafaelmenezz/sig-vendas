<template>

      <section class="cards">
            <sig-card :cardName="cardUm.cardName" :cardNumbers="cardUm.cardNumbers" :cardIcon="cardUm.cardIcon" />
            <sig-card :cardName="cardDois.cardName" :cardNumbers="cardDois.cardNumbers" :cardIcon="cardDois.cardIcon" />
            <sig-card :cardName="cardTres.cardName" :cardNumbers="cardTres.cardNumbers" :cardIcon="cardTres.cardIcon" />
            <sig-card :cardName="cardQuatro.cardName" :cardNumbers="cardQuatro.cardNumbers"
                  :cardIcon="cardQuatro.cardIcon" />
      </section>

      <section class="atendimento">
            <sig-atendimento class="sig-atendimento"/>
            <div class="uk-flex uk-flex-column">
                  <sig-qtd-atendimento-dia class="sig-grafico" />
                  <sig-setores-dia />
            </div>
      </section>

      <section>
            <sig-vendas-por-hora-dia  />
      </section>


</template>

<script>
import SigCard from '@/components/SigCard.vue'
import SigAtendimento from '@/components/SigAtendimento.vue'
import SigQtdAtendimentoDia from '@/components/SigQtdAtendimentoDia.vue'
import SigSetoresDia from '@/components/SigSetoresDia.vue'
import SigVendasPorHoraDia from '@/components/SigVendasPorHoraDia.vue'

export default {

      name: 'SigHome',
      components: {
            SigCard,
            SigAtendimento,
            SigQtdAtendimentoDia,
            SigSetoresDia,
            SigVendasPorHoraDia
      },
      computed: {
            addCards() {
                  return [this.cardUm]
            }
      },
      data() {
            return {
                  cardUm: {
                        cardName: 'TMA',
                        cardNumbers: '00:53',
                        cardIcon: 'fa-solid fa-clock'
                  },
                  cardDois: {
                        cardName: 'Total de Vendas',
                        cardNumbers: '253',
                        cardIcon: 'fa-solid fa-cart-shopping'
                  },
                  cardTres: {
                        cardName: 'Meta do Dia',
                        cardNumbers: 'R$ 535K',
                        cardIcon: 'fa-solid fa-coins'
                  },
                  cardQuatro: {
                        cardName: 'Total Vendido',
                        cardNumbers: 'R$ 137.520K',
                        cardIcon: 'fa-solid fa-dollar-sign'
                  }
            }
      }
}
</script>

<style scoped>
section {
      position: relative;
      width: 100%;
      padding: 20px;
      display: grid;
      grid-gap: 30px;
}

section.cards {
      grid-template-columns: repeat(4, 1fr);
}

section.atendimento {
      grid-template-columns: repeat(2, 1fr);
}

.sig-atendimento{
      grid-row-start: 1;
       grid-row-end: auto; 
}
.sig-grafico{
      grid-row-start: 1;
       grid-row-end: 1;
}



</style>