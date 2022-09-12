<template>
      <div class="uk-card uk-card-small uk-box-shadow-medium uk-card-body uk-flex uk-flex-around">
            <div>
                  <div class="numbers">{{cardNumbers}}</div>
                  <div class="cardName">{{cardName}}</div>
            </div>
            <div class="iconBx">
                  <i :class="cardIcon"></i>
            </div>
      </div>
</template>

<script>
export default {
      name: 'SigCard',
      props: {
            cardName: String,
            cardNumbers: String,
            cardIcon: String
      }
}
</script>

<style scoped>
.uk-card {
      font-family: 'Inter';
}

.numbers {
      font-family: 'Inter';
      position: relative;
      font-size: 1.8em;
      font-weight: 500;
      color: var(--azul);
}

.cardName {
      font-family: 'Poppins';
      color: var(--verde2);
      font-size: 1.1em;
      margin-top: 5px;
}

.iconBx {
      font-size: 3.5em;
      color: var(--verde2);
}

.uk-card:hover {
      background-color: var(--azul);
      transition: 0.5s;
}

.uk-card:hover .numbers,
.uk-card:hover .cardName,
.uk-card:hover .iconBx {
      color: var(--white);
      transition: 0.5s;
}
</style>