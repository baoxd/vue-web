<template>
	<div>
		<Table :data="tableData" :columns="tableColumns" stripe border @on-select="selectTable">
		</Table>
		<div style="margin: 10px;overflow: hidden">
			<div style="float:right;">
				<Page :total="total" :current="page" @on-change="changePage" show-total></Page>
			</div>
		</div>
	</div>
</template>

<script>
import { getUserListPage, removeUser, editUser } from '../../api/api'

export default {
	data(){
		let { show , remove } = this

		return {
			total: 0,
			page: 1,
			tableData: [],
			tableColumns: [
				{
					type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '名字',
                    key: 'name',
                    align: 'center',
                    sortable: true
                  
                },
                {
                    title: '地址',
                    align: 'center',
                    key: 'addr',
                    width: 300
                },
                {
                    title: '年龄',
                    align: 'center',
                    key: 'age'
                },
                {
                    title: '生日',
                    align: 'center',
                    key: 'birth'
                },
                {
                    title: '性别',
                    key: 'sex',
                    align: 'center',
                    render: function(h, params){
                        return params.row.sex == 0 ? '男' : '女'
                    }
                },
                {
                	title: '操作',
                	key: 'action',
                	width: 150,
                	align: 'center',
                	render: function(h, params){
                		return h('div', [
                			h('Button', {
                				props: {
                					type: 'primary',
                					size: 'small'
                				},
                				style: {
                					marginRight: '5px'
                				},
                				on: {
                					click: () => {
                						show(params.index)
                					}
                				}
                			}, '查看'),
                			h('Button', {
                				props: {
                					type: 'error',
                					size: 'small'
                				},
                				on: {
                					click: () => {
                						remove(params.index)
                					}
                				}
                			}, '删除')
                		]);
                	}
                }
			],
		}
	},
	methods:{
		// 选择table
		selectTable() {
			console.log('table被选择')
			console.log(arguments)
		},
		mockTableData() {
			// 初始化数据
			let params = {
				page: this.page
			}

			this.$Loading.start()
			getUserListPage(params).then((res) => {
				this.$Loading.finish()
				this.total = res.data.total
				this.tableData = res.data.users
			})

		},
		show(index) {
			let user = this.tableData[index]
			this.$Modal.info({
				title: '用户信息',
				content: `姓名：${user.name}<br>年龄：${user.age}<br>地址：${user.addr}`
			})
		},
		remove(index) {
			let self = this

			this.$Modal.confirm({
				title: '用户信息',
				content: '是否删除此记录',
				onOk() {
					this.$Loading.start()
					let params = {id: index+1}

					removeUser( params ).then((res) => {
						let resData = res.data
						if(resData.code == 200){
							self.mockTableData()
						}else{
							this.$Message.error('删除失败')
						}
					})
				}
			})
		},
		changePage(page) {
			this.page = page
			this.mockTableData()
		}
	},

	mounted() {
		this.mockTableData()
	}
}
</script>

<style>
	
</style>