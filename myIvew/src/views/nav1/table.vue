<template>
	<div>
		<Table :data="tableData" :columns="tableColumns" stripe border>
		</Table>
		<div style="margin: 10px;overflow: hidden">
			<div style="float:right;">
				<Page :total="total" :current="page" @on-change="changePage" show-total></Page>
			</div>
		</div>
	</div>
</template>

<script>
import { getUserListPage } from '../../api/api'

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
		changePage() {

		},
		show() {

		},
		remove() {

		}
	},

	mounted() {
		this.mockTableData()
	}
}
</script>

<style>
	
</style>