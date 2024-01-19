<template>
    <el-scrollbar class="directory-scrollbar">
        <el-space class="directory-scrollbar-body" direction="vertical" :size="10">
            <el-space class="directory-sponsor" alignment="left" direction="vertical" :size="10">
                <el-text>赞助商</el-text>
                <a href="http://baidu.com" target="_blank">
                    <img class="img-sponsor" src="https://element-plus.org/images/js-design-banner.jpg" alt="">
                </a>
                <a href="http://baidu.com" target="_blank">
                    <img class="img-sponsor" src="https://element-plus.org/images/vform-banner.png" alt="">
                </a>
            </el-space>

            <div v-for="diritem in tools_directory_data" class="directory-body">
                <p style="margin-bottom: 11px;"><b>{{ diritem.dirname }}</b></p>
                <el-radio-group class="radio-group-body" @change="handleChange" v-model="directory_radio" size="large">
                    <el-radio-button v-for="index in diritem.mds" class="radio-group-body-item"
                        :label="`${diritem.ii}.${diritem.dirname}/${index}`">{{ index }}</el-radio-button>
                </el-radio-group>
            </div>
        </el-space>
    </el-scrollbar>
    <el-main class="page-content">
        <MdPreview ref="mdpreview" :modelValue="mdtext" theme="dark" codeTheme="github" previewTheme="default"
            showCodeRowNumber="true" @onGetCatalog="onGetCatalog" @onHtmlChanged="onHtmlChanged" />
    </el-main>

    <div class="md-anchor-point">
        <el-scrollbar>
            <el-radio-group class="radio-group-body" @change="onAnchorPointOnClick" v-model="anchor_radio" size="large">
                <el-radio-button v-for="item in anchor_list" class="radio-group-body-item" :label="item">
                    {{ truncateText(item.innerText,15)}}
                </el-radio-button>
            </el-radio-group>
        </el-scrollbar>
    </div>
</template>
<script>
// https://img.xsojson.com 图库使用这个
import { ref, onMounted } from "vue";
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { getRelativeTop } from "../utils/utils.js";

const markDownTexts = import.meta.glob("../assets/book/tools/*/*.md", { as: 'raw' });
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
        function truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            }
            return text;
        }
        async function handleChange(value) {
            let mddatap = await markDownTexts[`../assets/book/tools/${value}.md`]();
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
        function onHtmlChanged(ht) {
            mdpreview.value.$nextTick(() => {
                let nodelistdata = mdpreview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
                let ellistdata = [];
                nodelistdata.forEach((x) => { ellistdata.push(x) })
                anchor_list.value = ellistdata;
                if (ellistdata.length > 0) {
                    anchor_radio.value = ellistdata[0]
                }


            })

        }
        function onGetCatalog(catalog) {

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
            truncateText

        }
    },
    async mounted() {
        function findActiveHeading(listdata) {

            if (listdata.length === 0) {
                return false;
            }
            function isElementInViewport(el) {
                let rect = el.getBoundingClientRect();
                return (
                    rect.bottom > 0 &&
                    rect.right > 0 &&
                    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.left < (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            let nonNegativeObjects = listdata.filter(obj => {
                return isElementInViewport(obj)
            });
            let curranchor = nonNegativeObjects[0];
            if (curranchor != undefined) {

                anchor_radio.value = curranchor;
                return;
            }
            if (!anchor_radio.value) return;

            let index_ = listdata.indexOf(anchor_radio.value);
            if (index_ <= 0) return;


            let toptemp = getRelativeTop(anchor_radio.value) - document.documentElement.scrollTop;
            if (toptemp < 0) return;

            anchor_radio.value = listdata[index_ - 1];

        }
        window?.addEventListener('scroll', function () {

            findActiveHeading(anchor_list.value);

        });

        let tools_data = await import("../assets/book/tools/index.json");
        if (tools_data && tools_data.default) {
            tools_directory_data.value = tools_data.default;
            let dirname = tools_data?.default?.[0]?.dirname;
            let mdname = tools_data?.default?.[0]?.mds?.[0];
            let ii = tools_data?.default?.[0]?.ii;
            let mdfilename = `${ii}.${dirname}/${mdname}`;
            if (mdfilename) {
                directory_radio.value = mdfilename;
                let mddatap = await markDownTexts[`../assets/book/tools/${mdfilename}.md`]();
                mdtext.value = mddatap;
            }
        }
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

.directory-scrollbar .el-scrollbar__view {
    width: 310px ;
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


