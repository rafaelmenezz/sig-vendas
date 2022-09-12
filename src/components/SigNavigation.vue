<template>

      <div class="navigation" :class="ativar ? 'active': ''">
            <ul>
                  <li>
                        <router-link to="/">
                              <span class="icon"></span>
                              <span class="title">SIG - Vendas</span>
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/">
                              <span class="icon"><i class="fa-solid fa-house-user"></i></span>
                              <span class="title">Home</span>
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/operadores">
                              <span class="icon"><i class="fa-solid fa-users"></i></span>
                              <span class="title">Operadores</span>
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/setores">
                              <span class="icon"><i class="fa-solid fa-cubes"></i></span>
                              <span class="title">Setores</span>
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/perfil">
                              <span class="icon"><i class="fa-solid fa-user"></i></span>
                              <span class="title">Perfil</span>
                        </router-link>
                  </li>
                  <li>
                        <router-link to="/">
                              <span class="icon"><i class="fa-solid fa-circle-xmark"></i></span>
                              <span class="title">Logout</span>
                        </router-link>
                  </li>

            </ul>
      </div>

</template>

<script>
export default {
      name: 'SigNavigation',
      props: {
            ativo: Boolean
      },
      computed: {
            ativar() {
                  return this.ativo;
            }
      }
}
</script>

<style scoped>
.navigation {
      position: fixed;
      width: 300px;
      height: 100%;
      background: var(--white);
      border-left: 10px solid var(--azul);
      border-right: 10px solid var(--azul);
      transition: 0.5s;
      overflow: hidden;

}

.navigation.active {
      width: 80px;
}

.navigation ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding-left: 0;
}

.navigation ul li {
      position: relative;
      width: 100%;
      list-style: none;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;

}

.navigation ul li:hover,
.navigation ul li.hovered {
      background: var(--white);

}

.navigation ul li:nth-child(1) {
      margin-bottom: 40px;
      pointer-events: none;
}


.navigation ul li {
      margin-bottom: 15px;
}

.navigation ul li a {
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: var(--azul);
      transition: 0.5s;
}

.navigation ul li:hover a,
.navigation ul li.hovered a {
      color: var(--verde1);
      transition: 0.5s;
}

.navigation ul li a .icon {
      position: relative;
      display: block;
      min-width: 60px;
      height: 60px;
      line-height: 70px;
      text-align: center;
}

.navigation ul li a .icon i {
      font-size: 1.50em;
}

.navigation ul li a .title {
      font-weight: 900;
      position: relative;
      display: block;
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
      text-align: start;
      white-space: nowrap;
}
</style>