<template>

      <div class="topbar">
            <div class="toggle" @click="ampliar">
                  <i class="fa-solid fa-bars"></i>
            </div>
            <!-- search -->
            <div class="sig-page">
                  <h1>{{$route.name}}</h1>
            </div>
            <!-- user image -->

            <div class="user">
                  <router-link to="/perfil">
                        <img src="../assets/operadores/madruga.jpg" alt="Foto do Usuario" />
                  </router-link>
            </div>
      </div>

</template>

<script>
export default {
      name: 'SigTopbar',
      emits: ['navegacao'],
      data() {
            return {
                  active: true
            }
      },
      methods: {
            ampliar() {
                  this.$emit('navegacao', this.active)
                  this.active = !this.active
            }
      }
}

</script>

<style scoped>

.topbar {
      width: 100%;
      padding: 20px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #888;
      background-color: var(--azul);
}

.toggle {
      position: relative;
      top: 0;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5em;
      cursor: pointer;
      color: #fff;
}

.sig-page {
      position: relative;
      width: 400px;
      margin: 0 10px;
}

.sig-page h1 {
      font-family: 'Poppins';
      position: relative;
      text-align: center;
      font-size: 2.4em;
      width: 100%;
      margin-top: 15px;
      color: #fff;
}



.user {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #fff;
      cursor: pointer;
}

.user img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
}

</style>