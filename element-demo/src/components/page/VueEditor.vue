<template>
	<div>
		<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
            访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
        </div>
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
	</div>
</template>


<script>
	import { quillEditor } from 'vue-quill-editor'
	export default {
		data() {
			return {
				content: '<p>Hello BBK</p>',
                editorOption: {
                }
			}
		},
		methods: {
			submit() {
				console.log(this.content);
                this.$message.success('提交成功！');
			},
			onEditorChange({ editor, html, text }) {
				console.log(arguments)
                this.content = html;
            },
		},
		computed: {
			// get the current quill instace object.
			editor() {
		    	return this.$refs.myQuillEditor.quill
		    }
		},
		components: {
			quillEditor
		}
	}
</script>


<style>
	.editor-btn{
        margin-top: 20px;
    }
</style>