import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'beercss'
import 'material-dynamic-colors'
import VueBeercssTable from './components/VueBeercssTable.vue'

const app = createApp(App)
app.component('VueBeercssTable', VueBeercssTable)
app.mount('#app')