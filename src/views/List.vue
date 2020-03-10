<template>
  <div class="list">
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
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="cesto" src="../assets/shields/huracan.png">
          </div>
          <div>
            <h3>Huracán</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="oxido" src="../assets/shields/independiente.png">
          </div>
          <div>
            <h3>Independiente</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="nadie" src="../assets/shields/newells.png">
          </div>
          <div>
            <h3>Newell´s Old Boys</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="dinos" src="../assets/shields/racing.png">
          </div>
          <div>
            <h3>Racing Club</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="pechos" src="../assets/shields/river.png">
          </div>
          <div>
            <h3>River Plate</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="gateros" src="../assets/shields/central.png">
          </div>
          <div>
            <h3>Rosario Central</h3>
            <p></p>
          </div>
        </div>
        <div class="box">
          <div>
            <img alt="super" src="../assets/shields/sanlorenzo.png">
          </div>
          <div>
            <h3>San Lorenzo</h3>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  </div>    
</template>

<style scoped>

  section{
    background-image: url("../assets/grass.jpg");
    color:beige;
  }

  .box{
    display: flex;
    justify-content: space-around; 
    margin: 5%;
    background: rgba(0, 0, 0, 0.600);
    border-radius: 20px;
  }

  p{
    text-align: left;
  }

</style>