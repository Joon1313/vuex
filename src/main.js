import { createApp } from 'vue'
import App from './App.vue'
import joonPlugin from './plugins/joonPlugin'
import store from './store'

createApp(App)
.use(store) // Vuex Store 객체
.use(joonPlugin) // 커스텀으로 주입한 변수
.mount('#app')
