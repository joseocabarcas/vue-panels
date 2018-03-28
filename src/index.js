import VuePanels from './components/VuePanels.vue'

// Install the components
export function install (Vue) {
	Vue.component('vue-panels', VuePanels);
}
// Expose the components
export {
	VuePanels,
}