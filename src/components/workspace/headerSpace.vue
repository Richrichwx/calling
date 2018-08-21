<template>
    <div class="header">
        <div class="header__button header__button_break">
              <img src="../../assets/break.png" alt="">
              <p>Перерыв</p>
        </div>
        <div class="header__clock">
            <p>17:45</p>
        </div>
        <div class="header__menu-wrapper">
            <div class="header__button header__button_menu">
                <a href=""><img src="../../assets/id.png"></a>
                <a href=""><img src="../../assets/mic.png"></a>
                <a href=""><img src="../../assets/user.png"></a>
                <a href=""><img src="../../assets/power.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header-space'
}
</script>

<style scoped>
.header{
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin-top: 10px;
}
.header__button{
    cursor: pointer;
    outline: none;
    border-radius: 5px;
}
.header__button_break{
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(0, 0, 0, 0.486);
    align-items: center;
    font-size: 25px;
    font-weight: bold;
}
.header__button_menu{
    width: 220px;
    display: flex;
    justify-content: space-between;
}
</style>
