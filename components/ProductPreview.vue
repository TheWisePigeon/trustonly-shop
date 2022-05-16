<template>
    	<div class="max-w-lg p-4 shadow-md ">
		<div class="flex justify-between pb-4 border-bottom">
			<div class="flex items-center">
				<a class="mb-0 capitalize ">{{name}}</a>
			</div>
		</div>
		<div class="space-y-4">
			<div class="space-y-2">
				<img :src="image" alt="" class="block object-cover object-center w-full rounded-md h-72 ">
				<div class="flex items-center text-xs">
					<span>{{price}}</span>
				</div>
			</div>
			<div >
				<a  class="block">
					<h3 class="text-xl font-semibold ">{{description}}</h3>
				</a>
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
    }
}
</script>