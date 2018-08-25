<template>
    <div class="sidebar">
        <button class="sidebar__button sidebar__button_info">данные о контакте</button>
        <div class="sidebar__button sidebar__button_status" @click="show= !show">
            {{status}}
        </div>
        <transition name="fade">
            <ul v-if="show">
                <li class="sidebar__button sidebar__button_list"
                    v-for="item in items"
                    :key="item"
                    @click="changeClick(item)">
                    {{item}}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      items: ['в сети', 'занят', 'отсутсвую', 'в самолете', 'в пути'],
      show: false,
      status: 'статус'
    }
  },
  methods: {
    changeClick: function (item) {
      this.status = item
      this.show = false
    }
  }
}
</script>

<style lang="scss">
.sidebar{
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #000;
}
.sidebar__button{
    width: 300px;
    height: 30px;
    cursor: pointer;
    outline: none;
    border: 1px solid #000;;
    border-radius: 7px;
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
}
.sidebar__button_info{
    width: 300px;
    height: 40px;
    background: steelblue;
    font-size: 22px;
}
.sidebar__button_list{
    list-style: none;
    margin: -6px 0 10px -41px;
    animation: .3s ease-in-out both fade;
}
.sidebar__button_list:hover{
    background: rgba(70, 131, 180, 0.61);
    transition: 0.5s;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
@for $i from 1 through 5 {
    .sidebar__button_list {
        &:nth-child(#{$i}) {
            animation-delay: $i * (.5s);
        }
    }
}
@keyframes fade{
    0% {
        opacity: 0;
        transform: translateY(-60px);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
