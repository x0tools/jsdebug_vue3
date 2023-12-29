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

            <div v-for="diritem in tools_directory_data" class="directory-body">
                <p style="margin-bottom: 11px;"><b>{{ diritem.dirname }}</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="directory_radio" size="large">
                    <el-radio-button v-for="md in diritem.mds" class="radio-group-body-item" :label="md.filename">{{
                        md.title }}</el-radio-button>
                </el-radio-group>
            </div>
        </el-space>
    </el-scrollbar>
    <el-main class="page-content">
        <MdPreview ref="mdpreview" :modelValue="mdtext" theme="dark" codeTheme="github" previewTheme="default"
            showCodeRowNumber="true" @onGetCatalog="onGetCatalog"  @onHtmlChanged="onHtmlChanged"/>
    </el-main>

    <div class="md-anchor-point">
        <el-scrollbar>
            <el-radio-group class="radio-group-body" @change="onAnchorPointOnClick" v-model="anchor_radio" size="large">
                <el-radio-button v-for="item in anchor_list" class="radio-group-body-item" :label="item">
                    {{ item.innerText }}
                </el-radio-button>
            </el-radio-group>
        </el-scrollbar>
    </div>
</template>
<script>

import { ref, onMounted } from "vue";
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { getRelativeTop } from "../utils/utils.js";

import mdtext_test from "../assets/book/toolsbook.md?raw"
const aaaaa = import.meta.glob("../assets/book/tools/*.md", { as: 'raw' });
const tools_directory_data = ref([]);
const directory_radio = ref("");
const anchor_list = ref([]);
const mdtext = ref("")
const mdpreview = ref(null);
const anchor_radio = ref({});


export default {
    components: {
        MdPreview
    },
    setup() {

        async function handleChange(value) {
            let mddatap = await aaaaa[`../assets/book/tools/${value}`]();
            mdtext.value = mddatap;
            console.log(value);
        }
        function onAnchorPointOnClick(item) {
            let top_ = getRelativeTop(item)
            document.documentElement.scrollTo({
                top: top_ - 60,
                behavior: 'smooth'
            })
        }
        function onHtmlChanged(ht){
            mdpreview.value.$nextTick(()=>{
                anchor_list.value  = mdpreview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
            
                
            })

        }
        function onGetCatalog(catalog) {
           
            anchor_list.value = catalog;
            if(catalog.length>0){
                anchor_radio.value  = catalog[0];
            }
            
            //{text: '工具的使用', level: 1}

        }
        return {
            tools_directory_data,
            directory_radio,
            mdtext,
            handleChange,
            onGetCatalog,
            onAnchorPointOnClick,
            mdpreview,
            anchor_list,
            anchor_radio,
            onHtmlChanged,

        }
    },
    async mounted() {
        
        let tools_data = await import("../assets/book/tools/index.json");
        if (tools_data && tools_data.default) {
            tools_directory_data.value = tools_data.default;
            let mdfilename = tools_data?.default?.[0]?.mds?.[0]?.filename;
            if (mdfilename) {
                directory_radio.value = mdfilename;
                let mddatap = await aaaaa[`../assets/book/tools/${mdfilename}`]();
                mdtext.value = mddatap;

            }
        }
        
        //mdpreview

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

    display: var(--md-anchor-point-display);
    position: fixed;
    top: 100px;
    bottom: 0px;
    left: calc(100% - 1920px + 1620px);
    right: 50px;
    margin: 0px;

}
</style>
      