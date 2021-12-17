<template>
  <main>
    <form id="login" class="temp">
      <label for="email">Adresse mail : </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Adresse mail de connexion"
        required
      />

      <label for="password">Mot de passe : </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Mot de passe de connexion"
        required
      />

      <input type="submit" value="Valider" />
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;800&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: Poppins;
  transition: 0.6s;
}
body {
  width: 100vw;
  height: 100vh;
  /* background: #453F66; */
  background: #d1d0e1;
  overflow-x: hidden;
}
main {
  margin: 100px 0 0;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 350px;
}
main .temp {
  padding: 10px;
  width: calc(28vw + 100px);
  height: calc(28vw + 100px);
  /* border: 1px solid #453F66; */
  box-shadow: 0 0 100px #453f66;
  border-radius: 12px;
  font-size: 2em;
  font-weight: 800;
  text-shadow: 0 0 4px #fff, 0 0 12px #fff;
  display: flex;
  position: fixed;
  top: 150px;
  flex-direction: column;
  filter: grayscale(100%);
}
main .temp:hover {
  box-shadow: 0 0 20px #000, 0 0 60px #453f66;
  transform: scale(1.03);
  filter: contrast(110%);
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
input {
  margin: 12px;
  background: transparent;
  box-shadow: 4px 4px 8px #453f66, -2px -2px 4px #453f6688;
  border: none;
  border-radius: 6px;
  color: #000;
  font-size: 0.6em;
  caret-color: #090940;
}

#login input[type="submit"] {
  width: 25%;
  margin: 0 auto;
  margin-top: 10%;
}
</style>