<template>
	<Form :model="formItem" :label-width="80">
		<Form-item label="姓名" prop="name"> 
			<Input v-model="formItem.name" placeholder="请输入"></Input>
		</Form-item>
		<Form-item label="邮箱" prop="mail">
			<Input v-model="formItem.mail" placeholder="邮箱"></Input>
		</Form-item>
		<Form-item label="城市" prop="city">
			<Select v-model="formItem.city" placeholder="请选择城市">
				<Option value="beijing">北京</Option>
				<Option value="tianjin">天津</Option>
				<Option value="kaifeng">开封</Option>
			</Select>
		</Form-item>

	</Form>
</template>

<script>

export default {
	data() {
		return {
			formItem: {
				name: '',
				mail: '',
				city: '',
				checkbox: [],
				switch: true,
				date: '',
				time: '',
				slider:[20, 50],
				textarea: ''
			}
		}
	}
}

</script>
