<template>
    <section class="hero">
        <h1 class="tagline">
            <span class="accent">专注于</span>
            <br>
            <span class="accent">JavaScript 前端安全</span>
        </h1>
        <p class="description" data-v-9e9e3e87="">
            我们团队拥有多年正向和逆向经验,推动前端安全发展。
        </p>
        <p class="actions">
            <el-button type="success" class="button_add button_addQQ">
                <el-space wrap :size="5">
                    <h3>加入QQ群</h3>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-space>
            </el-button>
            <el-button type="primary" class="button_add button_addTG">
                <el-space wrap :size="5">
                    <h3>加入TG群</h3>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-space>
            </el-button>
        </p>

    </section>
    <el-divider class="divider" />
    <section class="highlights">
        <div>
            1
        </div>
        <div>
            2
        </div>
        <div>
            3
        </div>
    </section>
</template>
<script>
export default {
    setup() {
        return {}
    }
}
</script>
<style scope >
* {
    margin: 0;
    padding: 0;

}

.divider {
    --el-main-padding: 0px;
}

.button_add {
    height: 40px;
    padding: 0px 2px 0px 8px;
    margin: 0px 20px 0px 20px;
    box-shadow: var(--el-box-shadow-light);
    --el-button-text-color: #121212;
}

.highlights {
    padding: 42px 32px;
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    justify-content: space-between;
}

.hero {
    padding: 96px 32px 70px 32px;
    text-align: center;
}

.description {
    font-size: 22px;
    color: #ebebeb99;

    margin: 24px auto 40px;
    line-height: 1.5;
    margin-bottom: 48px;
}

.tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;
    background: -webkit-linear-gradient(315deg, #215a90 25%, #ff0984);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
  