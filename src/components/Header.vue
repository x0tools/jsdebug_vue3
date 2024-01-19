<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="header-margin"></div>
        <el-menu-item class="logo" index="">
            <img class="logo-img" style="height: 50%" src="../assets/images/element-plus-logo.svg" alt="Element logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item class="header-item" index="home">
            <h4 class="header-item-text">
                首页
            </h4>
        </el-menu-item>
        <el-menu-item class="header-item" index="team">
            <h4 class="header-item-text">
                团队介绍
            </h4>
        </el-menu-item>
        <el-menu-item class="header-item" index="toolsbook">
            <h4 class="header-item-text">
                实用工具
            </h4>
        </el-menu-item>
        <el-menu-item class="header-item" index="doc">
            <h4 class="header-item-text">
                学习资料
            </h4>
        </el-menu-item>
        <el-menu-item class="header-item" index="testlist">
            <h4 class="header-item-text">
                练习靶场
            </h4>
        </el-menu-item>
        <div class="header-margin"></div>
    </el-menu>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const activeIndex = ref('home')
        const handleSelect = function (key, keyPath) {
            if (key) {
                router.push({ path: '/' + key })
            }
           
        }
        return { activeIndex, handleSelect }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.flex-grow {
    flex-grow: 1;
    outline: none;
}

.header-margin {
    width: 220px;
    outline: none;
}

.logo {

    margin: 0px 100px 0px 0px;
    --el-menu-active-color: #00000000;
    --el-menu-hover-bg-color: #00000000;
}

.logo-img {
    filter: drop-shadow(2px 2px 6px #409eff);
}

.header-item {
    --el-menu-hover-bg-color: #00000000;
}

.header-item-text {
    margin: 0px 20px 0px 20px;
}</style>
  