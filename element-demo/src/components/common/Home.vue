<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
		<div class="content">
			<transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
		</div>
	</div>
</template>


<script>
	import vHeader from './Header'
	import vSidebar from './Sidebar'

	export default {
		components: {vHeader, vSidebar}
	}

</script>

