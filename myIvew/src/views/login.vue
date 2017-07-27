<template>
	<Form ref="formLogin" :model="formLogin" :rules="formLoginRules" class="card-box">
		<Form-item class="formLogin-title">
			<h3>系统登录</h3>
		</Form-item>

		<Form-item prop="username">
			<Input size="large" type="text" v-model="formLogin.username" placeholder="用户名">
				<Icon type="ios-person-outline" slot="prepend"></Icon>
			</Input>
		</Form-item>
		<Form-item prop="password">
			<Input size="large" type="password" v-model="formLogin.password" placeholder="密码">
				<Icon type="ios-locked-outline" slot="prepend"></Icon>
			</Input>
		</Form-item>
		<Form-item class="login-no-bottom">
			<Checkbox-group v-model="formLogin.remember">
				<Checkbox label="记住密码" name="remember"></Checkbox>
			</Checkbox-group>
		</Form-item>
		<Form-item class="login-no-bottom">
			<Row>
				<Col :xs="{span:4, offset:6}">
					<Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
				</Col>
				<Col :xs="{span:4, offset:6}">
					<Button type="primary" @click="formLoginReset('formLogin')">重置</Button>
				</Col>
			</Row>
		</Form-item>
	</Form>
</template>


<script>
	import storage from '../libs/storage'

	export default {
		data() {
			return {
				formLogin: {
					username: '',
					password: '',
					remember: []
				},
				formLoginRules: {
					username: [
						{required: true, message: '请填写用户名', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请填写用户密码', trigger: 'blur'},
						{type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
					]
				}
			}
		},
		methods:{
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid){
						console.log('验证通过')
					}
				})
			},
			formLoginReset() {
				console.log('formLoginReset')
			}
		},
		mounted() {

		}
	}
</script>

<style scoped>
  .card-box {
    padding: 20px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    width: 400px;
  }
  
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .formLogin-title {
      text-align: center;
      font-seze: 28px;
  }
  .formLogin-title h3{
      font-size: 18px;
  }
  .login-no-bottom {
      	margin-bottom: 10px;
  }
</style>