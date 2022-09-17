<template>
      <div class="perfil uk-flex">
            <div
                  class="descricao uk-panel uk-width-1-3 uk-margin-right uk-height-large uk-flex uk-flex-column uk-box-shadow-medium" >
                  <div class="userBox uk-margin-auto uk-box-shadow-medium ">
                        <img :src="require('@/assets/operadores/madruga.jpg')" alt="" />
                  </div>
                  <div class="info uk-align-center uk-flex uk-flex-column uk-text-center">
                        <h3>Gerente de Operações</h3>
                        <span class="card-email">Email: ricardo.almeida@vendas.com</span>
                        <span class="card-tel">48 9 88553254</span>
                  </div>
            </div>

            <div class="dados uk-width-2-3  uk-flex uk-flex-column uk-box-shadow-medium">

                  <div class="uk-margin-remove">
                        <h3>Dados Pessoais</h3>
                        <span>Revise e atualize suas informações abaixo.</span>
                  </div>
                  <div
                        class="uk-flex uk-flex-row uk-margin-small-left uk-margin-small-right uk-margin-remove-top uk-margin-remove-bottom">
                        <fieldset class="uk-width-1-1 ">
                              <legend>Nome</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                  </div>
                  <div
                        class="uk-flex uk-flex-row uk-margin-small-left uk-margin-small-right uk-margin-remove-top uk-margin-remove-bottom">

                        <fieldset class="uk-width-1-2">
                              <legend>E-mail</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                        <fieldset class="uk-width-1-2">
                              <legend>Telefone</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                  </div>
                  <div
                        class="uk-flex uk-flex-row uk-margin-small-left uk-margin-small-right uk-margin-remove-top uk-margin-remove-bottom">

                        <fieldset class="uk-width-1-2">
                              <legend>Jornada Inicio</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                        <fieldset class="uk-width-1-2">
                              <legend>Jornada Fim</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                  </div>

                  <div
                        class="uk-flex uk-flex-row uk-margin-small-left uk-margin-small-right uk-margin-remove-top uk-margin-remove-bottom">

                        <fieldset class="uk-width-1-1">
                              <legend>Endereço</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                  </div>
                  <div
                        class="uk-flex uk-flex-row uk-margin-small-left uk-margin-small-right uk-margin-remove-top uk-margin-remove-bottom">

                        <fieldset class="uk-width-1-4">
                              <legend>Numero</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                        <fieldset class="uk-width-1-4">
                              <legend>Cidade</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                        <fieldset class="uk-width-3-5">
                              <legend>CEP</legend>
                              <input class="uk-input" type="text" />
                        </fieldset>
                  </div>
                  <div class="botoes uk-width-1-1 uk-flex uk-flex-right uk-margin uk-padding-small" uk-justify-right>
                        <button class="uk-button uk-button-primary uk-margin">Editar</button>
                  </div>

            </div>

      </div>
</template>

<script>
export default {
      name: 'SigPerfil'
}
</script>

<style scoped>
.perfil {
      margin-top: 2.5%;
      padding: 20px;
}

.userBox {
      position: relative;
      width: 175px;
      height: 175px;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 50px;

}

.userBox img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
}

.dados {
      padding: 30px;
}

fieldset {
      margin: 0;
      margin-left: 5px;
      margin-right: 5px;
}

legend {
      padding: 10px;
      margin-left: 25px;

      font-size: 1.4em;
}

input {
      font-size: 1.4em;
      border: none;
      height: 100%;
}
h3{
      font-weight: 900;
      margin-bottom: 0;
}
button{
      font-weight: 900;
}
</style>