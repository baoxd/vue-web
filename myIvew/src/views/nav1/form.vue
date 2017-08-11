<template>
	<Form ref="formItem" :model="formItem" :label-width="80" :rules="formRules">
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
		<Form-item label="选择日期">
			<Row>
				<Col span="4">
					<Form-item prop="date">
						<Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
					</Form-item>
				</Col>
				<Col span="1" style="text-align: center;">-</Col>
				<Col span="4">
					<Form-item prop="time">
						<Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
					</Form-item>
				</Col>
			</Row>
		</Form-item>
		<Form-item label="性别" prop="gender">
			<Radio-group v-model="formItem.gender">
				<Radio label="male">男</Radio>
				<Radio label="female">女</Radio>
			</Radio-group>
		</Form-item>
		<Form-item label="爱好" prop="interest">
			<Checkbox-group v-model="formItem.interest">
				<Checkbox label="吃饭"></Checkbox>
				<Checkbox label="睡觉"></Checkbox>
				<Checkbox label="打豆豆"></Checkbox>
				<Checkbox label="看电影"></Checkbox>
			</Checkbox-group>
		</Form-item>
		<Form-item label="开关">
			<i-switch v-model="formItem.switch" size="large">
				<span slot="open">开启</span>
				<span slot="close">关闭</span>
			</i-switch>	
		</Form-item>
		<Form-item label="滑块">
			<Slider v-model="formItem.slider" range></Slider>
		</Form-item>
		<Form-item label="爱好" prop="desc">
			<Input v-model="formItem.desc" type="textarea" :autosize="{minRows:2, maxRows:5}" placeholder="请输入..."></Input>
		</Form-item>
		<Form-item>
			<Button type="primary" @click="handleSubmit('formItem')">提交</Button>
			<Button type="ghost" style="margin-left:8px;" @click="handleReset('formItem')">取消</Button>
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
				date: '',
				time: '',
				gender: '',
				interest: [],
				switch: true,
				slider:[20, 50],
				desc:''
			},
			formRules: {
				name: [
					{ required: true, message: '姓名不能为空', trigger: 'blur'}
				],
				mail: [
					{ required: true, message: '邮箱不能空', trigger:'blur'},
					{ type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
				],
				city: [
					{ required: true, message: '请选择城市', trigger: 'change'}
				],
				date: [
					{ required: true, type:'date', message: '请选择日期', trigger: 'change'}
				],
				time: [
					{ required: true, type:'date', message: '请选择时间', trigger: 'change'}
				],
				gender: [
					{ required: true, message: '请选择性别', trigger: 'change'}
				],
				interest: [
					{ required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change'},
					{ type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change'}
				],
				desc: [
					{ required: true, message: '请输入个人介绍', trigger: 'blur'},
					{ type: 'string', min: 20,  message: '介绍不能少于20字', trigger: 'blur'}
				]
			}
		}
	},
	methods: {
		handleSubmit(name) {
			let formItem = this.formItem

			console.log('name=' + formItem.name)
			console.log('mail=' + formItem.mail)
			console.log('city=' + formItem.city)
			console.log('name=' + formItem.name)
			console.log('date=' + formItem.date)
			console.log('time=' + formItem.time)
			console.log('gender=' + formItem.gender)
			console.log('interest=' + formItem.interest)
			console.log('switch=' + formItem.switch)
			console.log('slider=' + formItem.slider)
			console.log('desc=' + formItem.desc)
			this.$refs[name].validate((valid) => {
				if(valid){
					console.log('验证通过..')
				}else{
					console.log('验证失败..')
				}
			})
		},
		handleReset(name) {
			this.$refs[name].resetFields()
		}
	}
}

</script>
