<template>
	<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
		<Row type="flex">
            <!-- 左侧菜单  -->
            <i-col class="layout-menu-left" :span="spanLeft">
                <Menu :model="modeType" theme="dark" width="auto" :active-name="this.$route.path" :open-names="openNames" @on-select="menuSelect" accordion> 
                    <div class="layout-logo-left">
                        <Icon type="paper-airplane" :size="logoSize" v-show="logoIsDisplay"></Icon>
                        <div class="layout-text">iview vue-web测试</div>
                    </div>
                    <template v-for="(item, index) in this.$router.options.routes" v-if="!item.hidden" >
                        <Submenu :name="item.name" v-if="!item.leaf" :key="index">
                            <template slot="title">
                                <Icon :type="item.iconCls" :size="iconSize"></Icon>
                                <span class="layout-text">{{item.name}}</span>
                            </template>
                            <template v-for="(child, childIndex) in item.children" v-if="!child.hidden" >
                                <Menu-item :name="child.path" :key="childIndex">{{child.name}}</Menu-item>                           
                            </template>
                        </Submenu>
                        <template v-if="item.leaf && item.children.length>0">
                            <Menu-item :name="item.children[0].path">{{item.children[0].name}}</Menu-item>
                        </template>
                    </template>
                </Menu>
            </i-col>

            <!-- 右侧内容 -->
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                         <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <div class="userinfo">
                        <Dropdown placement="bottom-end">
                            <span class="head-img">
                                {{curUserName}}
                                <img src="../assets/user.jpg">
                            </span>
                            <Dropdown-menu slot="list">
                                <Dropdown-item @click.native="modifyPassWord()">修改密码</Dropdown-item>
                                <Dropdown-item @click.native="logout()" divided>退出</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item>应用中心</Breadcrumb-item>
                        <Breadcrumb-item>{{$route.name}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </i-col>
        </Row>

        <!-- 修改密码模态框 -->
        <Modal v-model="modal1" title="修改密码" @on-ok.prevent="comfirmModifyPS" @on-cancel="cancel">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <Form-item label="原密码" prop="oldPassword">
                    <Input v-model="formValidate.oldPassword" placeholder="请输入原始密码"></Input>
                </Form-item>
                <Form-item label="新密码" prop="newPassword">
                    <Input v-model="formValidate.newPassword" placeholder="请输入新密码"></Input>
                </Form-item>
                 <Form-item label="确认新密码" prop="resetPassword">
                    <Input v-model="formValidate.resetPassword" placeholder="请再次输入新密码"></Input>
                </Form-item>
            </Form>
        </Modal>
	</div>
</template>

<script>

import store from '../libs/storage'
const sessionStore = store.sessionStore

export default {
	data() {
		return {
			spanLeft:5,
            spanRight:19,
            modeType:'vertical',
            openNames:[this.$route.matched[0].name],
            logoIsDisplay:false,
            curUserName: sessionStore.get('user'),
            modal1:false,
            formValidate: {
                oldPassword: '',
                newPassword: '',
                resetPassword: ''
            },
            ruleValidate: {
                oldPassword: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ],
                newPassword: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ],
                resetPassword: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ]
            }
		}
	},
    computed: {
        iconSize(){
            return this.spanLeft == 5 ? 14 : 24;
        },
        logoSize(){
            if(this.spanLeft !=5){
                this.logoIsDisplay = true;
                return 30
            }else{
                this.logoIsDisplay = false;
                return 0
            }
        }
    },
    methods: {
        // 选择菜单
        menuSelect(name) {
            this.$router.push({path: name});
        },
        toggleClick() {
            if(this.spanLeft == 5){
                this.spanLeft = 1
                this.spanRight = 20
            }else{
                this.spanLeft = 5
                this.spanRight = 19
            }
        },
        modifyPassWord(){
            console.log('修改密码');
            this.modal1 = true;
        },
        logout(){
            sessionStore.remove('user');
            this.$router.push({path: '/login'});
        },
        comfirmModifyPS(){
            this.$refs.formValidate.validate( (valid) => {
                console.log(valid)
                if(valid){
                    this.modal1 = false;
                    this.$Message.success('修改成功')
                }else{
                    this.$Message.error('表单验证失败')
                    return false;
                }
            })
        },
        cancel(e){
            console.log(e)
            this.modal1 = false
            this.$Message.info('点击了取消')
        }
    },
    created(){
    },
    mounted() {
    }
}
</script>

<style>
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: 100%;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: auto;
    background: #fff;
    border-radius: 4px;
     height: 80%;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left{
    background: #464c5b;
}
.layout-header{
    height: 60px;
    background: #fff;

}
.layout-logo-left{
    width: 90%;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    text-align: center;
    color:#eee;
  /*  background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;*/
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
.layout-hide-text .layout-text{
    display: none;
}
.ivu-col{
    transition: width .2s ease-in-out;
}
.ivu-row-flex{
    height: 100%;
}
.userinfo{
    display: inline-block;
    float: right;
}
.userinfo .ivu-dropdown{
    margin-top: 50px;
}
 .ivu-dropdown {
    margin-right: 25px;
    margin-top: 22px;
}
.ivu-menu-submenu-title{
    padding: 14px;
}

.head-img {
    width: 100%;
    height: 60px;
    line-height: 60px;
    float: right;
    margin-top: -50px;
}
.head-img img{
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    width: 40px;
    height: 40px;
    float: right;
}
</style>