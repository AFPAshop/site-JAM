<template>
  <div class="general">
    <div class="title">
      <h1>Inscription</h1>
    </div>
    <form method="post" action="Valider" onSubmit="return validate()">
      <div class="pat">
        <label for="name"></label>
        <input
          type="text"
          placeholder="Nom"
          style="text-align: center"
          name="name"
          id="name"
          oninvalid="setCustomValidity('Remplis le formulaire batard')"
          required
        /><br />

        <label for="surname"></label>
        <input
          type="text"
          placeholder="Prénom"
          style="text-align: center"
          name="surname"
          id="surname"
          oninvalid="setCustomValidity('Remplis le formulaire batard')"
          required
        /><br />
      </div>

      <div class="coord">
        <label for="mail"></label>
        <input
          type="email"
          placeholder="Email"
          title="Ex: xxxx@yyyy.com"
          style="text-align: center"
          name="mail"
          id="mail"
          oninvalid="setCustomValidity('Remplis le formulaire batard')"
          required
        /><br />

        <label for="phone"></label>
        <input
          type="tel"
          placeholder="Téléphone"
          title="Ex: 0607080910"
          style="text-align: center"
          name="phone"
          id="phone"
          pattern="[0-9]{10}"
          size="10"
          oninvalid="setCustomValidity('Remplis le formulaire batard')"
        /><br />
      </div>

      <div class="pwd">
        <label for="password">
          <input
            type="password"
            placeholder="Mot de passe"
            title="De 4 à 8 caratères"
            style="text-align: center"
            name="password"
            id="password"
            minlength="4"
          />

          <div class="password-icon">
            <i class="bi bi-eye-fill" id="eye" v-on:click="changer()"></i>
          </div>
        </label>
        <br />

        <label for="verifypwd">
          <input
            type="password"
            placeholder="Confirmation"
            title="De 4 à 8 caratères"
            style="text-align: center"
            name="verifypwd"
            id="verifypwd"
            minlength="4"
            oninvalid="setCustomValidity('Remplis le formulaire batard')"
            required
          />

          <div class="password-icon2"></div>
        </label>
      </div>

      <div class="butt">
        <input
          type="submit"
          onclick="validate()"
          name="submit"
          value="Valider"
        />
        <span id="msg"></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e: true,
    };
  },
  mounted() {},
  methods: {
    changer() {
      if (this.e == true) {
        document.getElementById("password").setAttribute("type", "text");
        document
          .getElementById("eye")
          .setAttribute("class", "bi bi-eye-slash-fill");
        this.e = false;
      } else {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "bi bi-eye-fill");
        this.e = true;
      }
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  background: linear-gradient(45deg, #d1d0e1, #090940);
  margin: 0 auto;
  height: 700px;
}

.general {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: black;
  border-style: double;
  margin: 150px auto;
  width: 400px;
  height: 500px;
  /* position: fixed; */
  background: linear-gradient(45deg, #090940, #d1d0e1);
  box-shadow: 9px 7px 13px 4px rgba(0, 0, 0, 0.76);
}

.title {
  margin: 0 auto;
}

input {
  margin: 12px;
  background: transparent;
  box-shadow: 4px 4px 8px #453f66, -2px -2px 4px #453f6688;
  border: none;
  border-radius: 6px;
  color: #000;
  font-size: 1.2em;
  caret-color: #090940;
}

input::placeholder {
  color: #0006;
  transition: 0.2s;
}

input:focus::placeholder {
  opacity: 0;
}

input:focus {
  outline: none;
  transform: scale(1.03);
}

label .password-icon:hover {
  cursor: pointer;
  color: #ff4754;
}
</style>