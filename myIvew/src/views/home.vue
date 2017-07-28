<template>
	<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
		
	</div>
</template>

<script>

export default {
	data() {
		return {
			spanLeft:5
		}
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