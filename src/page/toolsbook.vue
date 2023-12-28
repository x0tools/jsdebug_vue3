<template>
    <el-scrollbar class="directory-scrollbar">
        <el-space class="directory-scrollbar-body" direction="vertical" :size="10">
            <el-space class="directory-sponsor" alignment="left" direction="vertical" :size="10">
                <el-text>赞助商</el-text>
                <a href="http://baidu.com" target="_blank">
                    <img class="img-sponsor" src="http://element-plus.org/images/js-design-banner.jpg" alt="">
                </a>
                <a href="http://baidu.com" target="_blank">
                    <img class="img-sponsor" src="http://element-plus.org/images/vform-banner.png" alt="">
                </a>
            </el-space>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>基础</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="1">设计</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="2">导航</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="3">测试</el-radio-button>
                </el-radio-group>
            </div>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>进阶</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="4">设计</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="5">导航</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="6">测试</el-radio-button>
                </el-radio-group>
            </div>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>进阶1</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="7">设计1</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="8">导航1</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="9">测试1</el-radio-button>
                </el-radio-group>
            </div>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>进阶2</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="10">设计2</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="11">导航2</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="12">测试2</el-radio-button>
                </el-radio-group>
            </div>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>进阶1</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="71">设计1</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="81">导航1</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="91">测试1</el-radio-button>
                </el-radio-group>
            </div>
            <div class="directory-body">
                <p style="margin-bottom: 11px;"><b>进阶2</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio1" size="large">
                    <el-radio-button class="radio-group-body-item" label="101">设计2</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="111">导航2</el-radio-button>
                    <el-radio-button class="radio-group-body-item" label="121">测试2</el-radio-button>
                </el-radio-group>
            </div>
        </el-space>
    </el-scrollbar>
    <el-main class="page-content">
        <MdPreview :editorId="id" :modelValue="mdtext" theme="dark" codeTheme="github" previewTheme="default" />
    </el-main>

    <div class="md-anchor-point">
        <el-scrollbar>
            <el-radio-group class="radio-group-body" @change="handleChange" v-model="radio2" size="large">
                <el-radio-button v-for="index in 10" class="radio-group-body-item"
                    :label="index">设计{{ index }}</el-radio-button>
            </el-radio-group>
        </el-scrollbar>
    </div>
</template>
<script>

import { ref, onMounted } from "vue";
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import mdtext_test from "../assets/book/toolsbook.md?raw"
const md_preview = ref(null);
const mdtext = ref(mdtext_test)
const radio1 = ref("1");
const radio2 = ref("1");

export default {
    components: {
        MdPreview
    },
    setup() {
        function handleChange(value) {
            console.log(value);
        }
        return {

            radio1,
            radio2,
            handleChange,
            mdtext,
            md_preview
        }
    },
    async mounted() {
        // let aaa = "../assets/book/"+"toolsbook"+".md?raw";
        // const text = await import(aaa);
        // mdtext.value = text.default;
    }
}
</script>
<style scope >
.directory-scrollbar {
    position: fixed;
    display: var(--directory-scrollbar-display);
    justify-content: flex-start;
    padding-left: var(--directory-scrollbar-padding-right);
    ;

    height: calc(100% - 60px);
    top: 60px;
    width: 310px;

}

.el-scrollbar__wrap {
    width: 310px;
}

.el-scrollbar__view {
    width: 310px;
}

.directory-scrollbar-body {
    display: inline-block;
    margin: 28px;
    min-width: 250px;
}

.page-content {
    display: flex;
    padding-left: var(--directory-page-content-padding-left);
    height: 100%;
    padding-right: var(--directory-page-content-padding-right);
}

.md-editor-dark {
    --md-bk-color: 00000000;
    --md-color: #ccc;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.md-editor-dark article.default-theme {
    --md-theme-code-block-bg-color: #151515;
}

.default-theme blockquote {
    border-left: 5px solid #409effAD;
}



.radio-group-body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: start;
}

.radio-group-body-item {
    flex: 1;

}

.img-sponsor {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.el-radio-button__inner {
    display: flex;
    flex: 1;
    border: none;
    border-left: none;
    border-radius: 4px;
}

.el-radio-button:first-child .el-radio-button__inner {
    border: none;
    border-left: none;
    border-radius: 4px;
}

.el-radio-button:last-child .el-radio-button__inner {
    border: none;
    border-left: none;
    border-radius: 4px;

}

.el-radio-button__original-radio:checked+.el-radio-button__inner {
    background-color: #409eff1a;
    color: #409eff;
    box-shadow: none;
    border: none;
    border-left: none;
    border-radius: 4px;
    font-weight: 600;
}

.el-main {
    --el-main-padding: 0px;
}

.md-anchor-point {
    /* background-color: #409eff;  block*/

    display: var(--md-anchor-point-display) ;
    position: fixed;
    top: 100px;
    bottom: 0px;
    left: calc(100% - 1920px + 1620px);
    right: 50px;
    margin: 0px;

}
</style>
      