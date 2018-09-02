<template>
    <div class="sidebar">
        <button class="sidebar__button sidebar__button_info">данные о контакте</button>
        <div class="sidebar__button_status" @click="show=!show" :class="{openList: !show}">
            {{status}}
        </div>
        <ul class="sidebar__button_list_item">
            <li class="sidebar__button sidebar__button_list"
                v-for="item in items"
                :key="item"
                @click="changeClick(item)">
                {{item}}
            </li>
        </ul>
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
    changeClick (item) {
      this.status = item
      this.show = false
    }
  }
}
</script>

<style lang="scss">
    $e: cubic-bezier(0,.5,.5,1.1);
    $bord: 1px solid #000;
    $mg: -6px 0 10px -41px;
    $bg: rgba(70, 131, 180, 0.61);
.sidebar{
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    border: 1px solid #000;
}
.sidebar__button, .sidebar__button_status{
    width: 300px;
    height: 30px;
    cursor: pointer;
    outline: none;
    border: $bord;
    border-radius: 7px;
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
}
.sidebar__button_info{
    height: 40px;
    background: steelblue;
    font-size: 22px;
}
.sidebar__button_list:hover{
    background: $bg;
    transition: 0.5s;
}
.sidebar__button_list{
    list-style: none;
    margin: $mg;
    opacity: 1;
   transform: none;
    @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
            transition: transform 150ms $e #{$i*100}ms, opacity 100ms ease-out #{$i*100}ms;
        }
    }
}
.sidebar__button_list:hover{
    background: $bg;
    transition: 0.5s;
}
.openList{
    ~ .sidebar__button_list_item > .sidebar__button_list{
        opacity: 0;
        transform: translateY(-50%);
        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
                transition: transform 150ms $e #{-($i - 5 - 1)*100}ms, opacity 100ms ease-out #{-($i - 5 - 1)*100}ms;
            }
        }
    }
}
</style>
