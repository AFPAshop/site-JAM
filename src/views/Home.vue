// Affichage des 2 templates pour choix commerçant
<template>
  <main>
    <div id="t1" class="temp">Template 1</div>
    <div id="t2" class="temp">Template 2</div>
  </main>
</template>

// CSS pour affichage templates
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
#header {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #090940 0%, #09090e 100%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  inset: 0;
  z-index: 100;
}
#header.zzz {
  background: radial-gradient(ellipse at bottom, #09090e 0%, #09090e 100%);
  height: 100px;
}
#header h1 {
  color: #fff;
  font-size: 6em;
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
}
#header.zzz h1 {
  color: #fff;
  font-size: 2em;
  inset: 50% auto auto 200px;
}
#header h1 span {
  color: #fff;
  font-size: 0.2em;
  text-align: center;
  position: absolute;
  inset: -50% auto auto 50%;
  transform: translate(-50%, -50%);
}
#header.zzz h1 span {
  opacity: 0;
}
#header h2 {
  color: #fff;
  font-size: 2em;
  font-weight: 200;
  letter-spacing: 0.2em;
  text-align: center;
  position: absolute;
  inset: auto auto 80px 50%;
  transform: translate(-50%, -50%);
  animation: scrll 1s infinite linear alternate;
}
@keyframes scrll {
  0% {
    color: #fff6;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 4px #fff;
    transform: translate(-50%, calc(-50% + 20px)) scale(1.05);
  }
}
#header.zzz h2 {
  opacity: 0;
}
#header nav {
  margin: 100px;
}
#header nav ul {
  display: flex;
  position: relative;
  transform: translate(100px, 0);
  opacity: 0;
}
#header.zzz nav ul {
  transform: translate(0);
  opacity: 1;
}
#header nav ul li {
  list-style: none;
}
#header nav ul li a {
  padding: 10px;
  color: #fff;
  font-size: 1.2em;
  display: inline-block;
  text-decoration: none;
}
#header nav ul li a:hover {
  color: #9696ff;
}
main {
  margin: 100px 0 0;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  filter: grayscale(100%);
}
main .temp:hover {
  box-shadow: 0 0 20px #000, 0 0 60px #453f66;
  transform: scale(1.03);
  filter: contrast(110%);
}
#t1 {
  background: url(https://cdn.dribbble.com/users/1049925/screenshots/10812791/media/e58b32a588ae119bd6b3b9caf7c9907d.png?compress=1&resize=400x300);
  left: 150px;
  top: 200px;
}
#t2 {
  background: url(https://i.pinimg.com/originals/3b/a2/06/3ba2062712ff2d323236d7e79d7b2d04.jpg);
  right: 150px;
  top: 200px;
}
</style>
