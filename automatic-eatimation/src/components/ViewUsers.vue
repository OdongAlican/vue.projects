
<template>
<div class = " container ">
  <div class="title">
      <label>
        VIEW USERS
      </label>
  </div>
    <div class = " center ">
      <div class="left">
        <div class="top">
            <label>
              CONSULTANT
            </label>
        </div>
        <div class="bottom">
          <div class="search">
            <input type="text" placeholder="search">
          </div>
          <div class="one"></div>
          <div class=""></div>
        </div>
      </div>
      <div class="middle">
        <div class="top">
          <label>
            PROJECT MANAGER
          </label>
        </div>
        <div class="bottom">
          <div class="search">
            <input type="text" placeholder="search">
          </div>
          <div class="one"></div>
          <div class=""></div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <label>
            DEVELOPER
          </label>
        </div>
        <div class="bottom">
          <div class="search">
            <input type="text" placeholder="search">
          </div>
          <div class="one"></div>
          <div class="two"></div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'ViewUsers',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.title {
  width: 320px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  font-size: xx-large;
  font-weight: bolder;
  padding-left: 80px;
  padding-top: 10px;
}
.center {
  margin-top: 20px;
  height: 490px;
  width: 980px;
  display: flex;
}

.left, .middle, .right {
  height: 490px;
  width: 300px;
  margin-left: 20px;
  margin-top: 10px;
}

.left .top, .middle .top, .right .top {
  width: 160px;
  margin: 10px 0 0 50px;
  border: 1px solid #D2D1D1;
  height: 50px;
  padding: 10px 0 0 40px;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
}

.left .bottom, .middle .bottom, .right .bottom {
  width: 280px;
  height: 405px;
  border: 1px solid #D2D1D1;
  border-radius: 5px;
  margin: 10px 0 0 10px;
}



.left .bottom div, .middle .bottom div, .right .bottom div {
  margin: 5px 0 0 5px;
  width: 260px;
  height: 35px;
  border: 1px solid #D2D1D1;
  border-radius: 5px;

}

.left .bottom input, .middle .bottom input, .right .bottom input {
  width: 260px;
  height: 35px;
  border-radius: 5px;
  border: none;
  /* border: 1px solid #D2D1D1; */
}

</style>
