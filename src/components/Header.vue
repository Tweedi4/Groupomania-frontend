<template>  
    <div class="container"> 
        <img class="logo" src="../assets/icon-left-font-monochrome-black.png"> 
        <nav class="main-nav">
            <ul class="main-nav-list">
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="user">Profile</router-link>
				</li>
				<button @click="logout">Logout</button>
			</ul>
        </nav>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
	data(){
		return {

		}
	},

	methods: {
		logout() {
			localStorage.clear();
			this.$router.push('/login');
			
		}
	},

	computed:{
		...mapState({
			getTokenUserIdFromVueX: 'tokenUserFromVueX',
			getUserIdFromVueX: 'userIdFromVueX',
		})
	}
}
</script>

<style scoped>
body {
	display: flex;
}

.container {
	max-width: 100%;
    background: #AB3535;
	display: flex;
    align-items: center;
    justify-content: space-between;
}

.main-header .container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
}

.logo {
    width: 100px;
    position: relative;
	left: 50px;
}

.main-nav ul {
	margin: 1em 0 .5em;
	text-align: center;
}
.main-nav li {
	display: inline;
}
.main-nav a {
	display: inline-block;
	padding: .5em 1.5em;
}

.fa-arrow-right-from-bracket {
	size: 2cm;
	color: black;
}

a {
	text-decoration:none;
	box-shadow: none;
	color: white;
}

</style>>