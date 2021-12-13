<template>
  <header id="header" class="zzz">
        <h1>           
            <router-link to="/" style="text-decoration: none; color: white;">AFPAShop</router-link>
        </h1>
        
        <nav>
            <ul>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/signup">Sign Up</router-link></li>                
            </ul>
        </nav>
    </header>
  <router-view/>
</template>



<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        font-family: Poppins;
        transition: .6s;
    }
    body{
        width: 100vw;
        height: 100vh;
        /* background: #453F66; */
        background: #D1D0E1;
        overflow-x: hidden;
    }
    #header{
        width: 100vw;
        height: 100vh;
        background: radial-gradient(
            ellipse at bottom, #090940 0%, #09090e 100%
        );
        display: flex;
        align-items: center;
        justify-content:flex-end;
        position: fixed;
        inset: 0;
        z-index: 100;
    }
    #header.zzz{
        background: radial-gradient(
            ellipse at bottom, #09090e 0%, #09090e 100%
        );
        height: 100px;
    }
    #header h1{
        color: #fff;
        font-size: 6em;
        position: absolute;
        inset: 50% auto auto 50%;
        transform: translate(-50%,-50%);
    }
    #header.zzz h1{
        color: #fff;
        font-size: 2em;
        inset: 50% auto auto 200px;
    }
    
    #header h2{
        color: #fff;
        font-size: 2em;
        font-weight: 200;
        letter-spacing: .2em;
        text-align: center;
        position: absolute;
        inset: auto auto 80px 50%;
        transform: translate(-50%,-50%);
        animation: scrll 1s infinite linear alternate;
    }
    
    #header.zzz h2{
        opacity: 0;
    }
    #header nav{
        margin: 100px;
    }
    #header nav ul{
        display: flex;
        position: relative;
        transform: translate(100px,0);
        opacity: 0;
    }
    #header.zzz nav ul{
        transform: translate(0);
        opacity: 1;
    }
    #header nav ul li{
        list-style: none;
    }
    #header nav ul li a{
        padding: 10px;
        color: #fff;
        font-size: 1.2em;
        display: inline-block;
        text-decoration: none;
    }
    #header nav ul li a:hover{
        color: #9696ff;
    }
    main{
        margin: 100px 0 0;
        width: 100%;
        height: calc(100% - 100px);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    main .temp{
        padding: 10px;
        width: calc(28vw + 100px);
        height: calc(28vw + 100px);
        /* border: 1px solid #453F66; */
        box-shadow:
            0 0 100px #453F66;
        border-radius: 12px;
        font-size: 2em;
        font-weight: 800;
        text-shadow:
            0 0 4px #fff,
            0 0 12px #fff;
        display: flex;
        flex-direction :column;
        position: fixed;
        filter: grayscale(100%);
    }
    main .temp:hover{
        box-shadow:
            0 0 20px #000,
            0 0 60px #453F66;
        transform: scale(1.03);
        filter: contrast(110%);
    }
    input::placeholder{
        color: #0006;
        transition: .2s;
    }
    input:focus::placeholder{
        opacity: 0;
    }
    input:focus{
        outline: none;
        transform: scale(1.03);
    }
    input {margin: 12px;
        background: transparent;
        box-shadow:
            4px 4px 8px #453F66,
            -2px -2px 4px #453F6688;
        border: none;
        border-radius: 6px;
        color: #000;
        font-size: 0.6em;
        caret-color: #090940;
    }
    
    #login input[type=submit]{
        width:25%;
        margin: 0 auto;
        margin-top:10%;
  }
  </style>
