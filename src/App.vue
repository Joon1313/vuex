<template>
<div class="container">
  <TheCounter :count="count" :doubleCount="doubleCount" :increment="increment" />
  <div>
    <h1>나는 플러그인에 제공/주입 된 객체에요</h1>
    <h2>이름: {{joon.name}}</h2>
    <h2>나이: {{joon.age}}</h2>
  </div>
</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { inject } from 'vue';
import { useStore } from 'vuex';
import TheCounter from './components/TheCounter.vue'

const store = useStore();

// state
const count = computed(() => store.state.counterStore.count);

// getters
const doubleCount = computed(() => store.getters.doubleCount);

// mutation
const increment = () => store.commit('increment');

// Plugin
const joon = inject('joon');

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color:#fff
}
.container {
  display: flex;
  justify-content: space-around;
}
body {
  background-color: #111;
}
</style>
