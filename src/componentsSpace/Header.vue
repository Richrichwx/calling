<template>
    <div class="header_cont_item">
        <div id="break">
          <button>
              <img src="./../assets/break.png" alt="">
              <h4>Перерыв</h4>
          </button>
        </div>
        <div id="clock">
            <p> 17:45 </p>
        </div>
        <div id="icon_contact">
            <a href=""><img src="./../assets/id.png"></a>
            <a href=""><img src="./../assets/mic.png"></a>
            <a href=""><img src="./../assets/user.png"></a>
            <a href=""><img src="./../assets/power.png"></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header_cont_item{
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin-top: 10px;
}
#break{
    display: flex;
}
#icon_contact{
    width: 250px;
    display: flex;
    justify-content: space-between;
}
button{
    width: 200px;
    height: 50px;
    outline: none;
    cursor: pointer;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.486);
    border-radius: 7px;
}
button img{
    float: left;
    margin: auto;
}
button h4{
    margin: 15px -22px;
    font-size: 20px;
    font-weight: bold;
}
</style>
