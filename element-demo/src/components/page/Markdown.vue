<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-SimpleMDE：Vue.js的Markdown Editor组件。
            访问地址：<a href="https://github.com/F-loat/vue-simplemde" target="_blank">Vue-SimpleMDE</a>
        </div>
        <mark-editor v-model="content" :configs="configs" ref="markdownEditor"></mark-editor>
        <div class="plugins-tips">
            <p>既然用了markdown语法了，那么就有一个很实际的问题了。要怎么在前台展示数据呢？</p>
            <br>
            <p>这个时候就需要解析markdown语法了。可以使用 <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a>：一个基于vue.js的markdown语法解析插件。（这里不作展开，有需要自行了解）</p>
        </div>
    </div>
</template>


<script>
	// 会有版本问题 
	import { markdownEditor } from 'vue-simplemde'
	let markEditor = markdownEditor.default
	console.log(markdownEditor)
	console.log(markEditor)

	export default {
		data() {
			return {
				content: '',
				configs: {
					// 禁用底部状态栏
					status: false,
					// 设置初始值
			        initialValue: '# 说明',
			        renderingConfig: {
			        	// 开启代码高亮
			          	codeSyntaxHighlighting: true, 
			          	// 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
			          	highlightingTheme: 'atom-one-light' 
			        }
				}
			}
		},
		components: {
			markEditor
		}
	}
</script>
