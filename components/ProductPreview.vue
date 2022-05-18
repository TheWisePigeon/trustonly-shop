<template>
	<div class="max-w-lg p-4 shadow-md ">
		<div class="flex justify-between pb-4 border-bottom">
			<div class="flex items-center">
				<a class=" font-bold ">{{ name }}</a>
			</div>
		</div>
		<div class="space-y-4">
			<div class="space-y-2">
				<img :src="image" alt="" class="block object-cover object-center w-full rounded-md h-72 ">
				<p class=" font-extrabold">{{price}}xof</p>
			</div>
			<div class=" flex justify-between" >
				<p>{{description}}</p>
				<div class=" flex justify-between">
					<button @click="add" v-if="inCart" >+</button>
					<button @click="remove" v-else >-</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		name: String,
		description: String,
		image: String,
		price: Number
	},
	data(){
		return {
			added: false
		}
	},
	methods:{
		add(){
			console.log("Add")
			this.added = true
		},
		remove(){
			console.log("Remove")
			this.added = false
		}
	},
	computed:{
		inCart(){
			return !this.added ? true : false
		}
	}
}
</script>