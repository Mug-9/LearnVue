import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementPlus, { ElButton, ElSelect } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import { Vue } from 'vue-class-component'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)
