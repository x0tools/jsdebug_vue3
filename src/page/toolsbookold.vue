<template>
    <div class="z1" >
        <div class="zz1">
            <v-md-preview ref="md_preview" class="md_" :text="mdtext"> </v-md-preview>
        </div>

        <div class="zzzzz">
            <el-affix :offset="120">
                <div>
                </div>
                <el-tabs tab-position="right" class="demo-tabs" @tab-click="OnTabClick">
                    <el-tab-pane v-for="cla in text_s" style="width: 0px;" :label="cla.title"></el-tab-pane>
                </el-tabs>

                <!-- <el-space alignment="left" direction="vertical" :size="5"> 
                    <el-button link size="large" type="info">Default</el-button>
                    <el-button link size="large" type="info">Default</el-button>
                    <el-button link size="large" type="info">Default</el-button>
                </el-space> -->
            </el-affix>
        </div>

    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import mdtext_test from "../assets/book/toolsbook.md?raw"
const md_preview = ref(null);
let text_s = ref([])
const mdtext = ref(mdtext_test)
export default {
    setup() {
        function OnTabClick(anchor,me) {
           const heading = text_s.value[anchor.index].node_
            if (heading) {
                //hook一下getOffsetTop 因为header是浮动的
                if(!md_preview.value.getOffsetTop_){
                    md_preview.value.getOffsetTop_ = md_preview.value.getOffsetTop;
                    md_preview.value.getOffsetTop = function(){
                       return md_preview.value.getOffsetTop_.apply(this,arguments) - 100;
                    }
                }
                
                md_preview.value.scrollToTarget({
                    target: heading
                });
            }
        }
        onMounted(() => {
            text_s.value = []
            var hs = md_preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
            function getText(node_) {
                let num = Number(node_.tagName.split("H")[1]) * 2;
                let temp_text = "";
                for (let i = 0; i < num - 1; i++) {
                    temp_text += " ";
                }
                let cla = {
                    title: temp_text + node_.innerText,
                    node_: node_,
                }

                text_s.value.push(cla);
            }

            hs.forEach((x) => {
                getText(x);
            });
        });
        return { mdtext, md_preview, text_s, OnTabClick }
    }
}
</script>
<style scope >
.md_ {
    display: flex;
}

.vuepress-markdown-body {
    width: 100%;
    color: var(--el-menu-text-color);
    background-color: #00000000;
}

.z1 {
    display: flex;
    justify-content: space-between;
}
.zz1{
}

.zzzzz {

    top: 0;
}

.demo-tabs {
    width: 400px;
}

.el-tabs--right .el-tabs__header.is-right {
    float: none;
}
</style>
      