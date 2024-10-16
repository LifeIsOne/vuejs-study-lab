import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'
import BoardComponent from './components/BoardComponent.vue'

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("AppNav", AppNav);
app.component("AppMain", AppMain);
app.component("BoardComponent", BoardComponent);
app.mount("#app");