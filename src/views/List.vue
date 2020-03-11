<template>
  <div class="list">
    <head></head>
    <img alt="logo" src="../assets/nysl_logo.png">
    <h2>List of teams</h2>
    <main class="container">
      <section>
        <div class="box">
          <div>
            <img alt="bokita" src="../assets/shields/boca.png">
          </div>
          <div>
            <h3>Boca Juniors</h3>
            <p>0 descensos </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="cesto" src="../assets/shields/huracan.png">
          </div>
          <div>
            <h3>Huracán</h3>
            <p>Fundado en 1999999</p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="oxido" src="../assets/shields/independiente.png">
          </div>
          <div>
            <h3>Independiente</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="nadie" src="../assets/shields/newells.png">
          </div>
          <div>
            <h3>Newell´s Old Boys</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="dinos" src="../assets/shields/racing.png">
          </div>
          <div>
            <h3>Racing Club</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="pechos" src="../assets/shields/river.png">
          </div>
          <div>
            <h3>River Plate</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="gateros" src="../assets/shields/central.png">
          </div>
          <div>
            <h3>Rosario Central</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="super" src="../assets/shields/sanlorenzo.png">
          </div>
          <div>
            <h3>San Lorenzo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
      </section>
    </main>
    <nav></nav>
  </div>    
</template>

<style lang="scss" scoped>

  .list {
    background:#347740;
    color:beige;
  }

  section{
    background: url("../assets/paste.jpg");
    margin: 2%;
    padding: 2%;
    border-radius: 25px;
  }

  .box{
    display: flex;
    justify-content: space-around; 
    height: 16vh;
    margin: 2%;
    background: rgba(0, 0, 0, 0.600);
    border-radius: 20px;
  }

  img{
    height: 14vh;
    position: relative;
    bottom: 8px;
    margin: 12px;
  }

  h3{
    font-size: 16px;
    margin: 10px;
    text-align: left;
  }

   p{
    font-size: 12px;
    margin: 10px;
    text-align: left;
  }

</style>