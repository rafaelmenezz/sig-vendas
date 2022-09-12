<template>

  <div class="container">
    <sig-navigation :ativo="active"/>
    <div class="main" :class="active? 'active' : ''">
      <sig-topbar @navegacao="navegar"/>
      <router-view/>
    </div>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  
</template>
<script>
  import SigNavigation from './components/SigNavigation.vue';
  import SigTopbar from './components/SigTopbar.vue'

export default{
  components:{
    SigNavigation,
    SigTopbar
  },
  data(){
    return{
      active: false
    }
  },
  methods:{
    navegar(e){
      this.active = e;
    }
  }
}
</script>
<style scoped>
.container{
      position:relative;
      width: 100%;

}
.main {
      position: absolute;
      width: calc(100% - 300px);
      left: 300px;
      min-height: 100vh;
      background: var(--white);
      transition: 0.5s;

}

.main.active {
      width: calc(100% - 80px);
      left: 80px;
      transition: 0.5s;
}
</style>
