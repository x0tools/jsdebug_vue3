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
    </section>
    <el-divider class="divider">
        <h2>
            加入我们
        </h2>
    </el-divider>
    <section class="add">
        <p class="actions">
            <el-button type="success" class="button_add button_addQQ"  
            tag="a"
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=8M97BQs-icsb3BitUoqxqIHIBcf6ayLf&authKey=kAJwU36Ih9k7nWbYXtUnXeZnnXOFpQpvv4Zl4PGxdCNd1icroeGsgK1eTpSVMXSw&noverify=0&group_code=461168359"
            target="_blank"
            rel="noopener noreferrer"
            >
                <el-space wrap :size="5">
                    <h3>点击加入QQ群</h3>
                    <el-icon style="font-size: 20px">
                        <CirclePlusFilled />
                    </el-icon>
                </el-space>
            </el-button>
            <el-button type="primary" class="button_add button_addTG"
            tag="a"
            href="https://t.me/+208rGDduK4s1NWU1"
            target="_blank"
            rel="noopener noreferrer"
            >
                <el-space wrap :size="5">
                    <h3>点击加入TG群</h3>
                    <el-icon style="font-size: 20px">
                        <Promotion />
                    </el-icon>
                </el-space>
            </el-button>
        </p>

    </section>
    <el-divider class="divider"> </el-divider>
    <section class="highlights">
        <div class="vt-box">
            <h2 class="highlights-h2">技术完善</h2>
            <p class="highlights-p">
                团队成员多是业内大佬,在不同领域都有所建树,整体技术栈完善，从前端到后端,从逆向到安全。
            </p>
        </div>
        <div class="vt-box">
            <h2 class="highlights-h2">团队和谐</h2>
            <p class="highlights-p">
                团队主要是以技术为唯一讨论点,并不涉及利益分配问题,所以团队成员间和谐进步。
            </p>
        </div>
        <div class="vt-box">
            <h2 class="highlights-h2">乐于分享</h2>
            <p class="highlights-p">
                团队成立以来，已分享过大量优质文章,视频教程,程序源码,工具插件等，为前端安全助力。
            </p>
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

*,
:before,
:after {
    box-sizing: border-box;
}

.add {
    display: flex;
    justify-content: center;
    padding: 28px 36px;
}

.vt-box {
    font-size: 14px;
    font-weight: 500;
    padding: 28px 36px;
    border-radius: 8px;
    flex: 0 32%;
    font-size: 14px;
    font-weight: 500;
}

.divider {
    --el-main-padding: 0px;
}

.button_add {
    text-decoration: none;
    height: 40px;
    padding: 0px 2px 0px 8px;
    margin: 0px 20px 0px 20px;
    box-shadow: var(--el-box-shadow-light);
    --el-button-text-color: #000000cc;
}

.highlights {
    max-width: 960px;
    padding: 20px 32px 62px 32px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
}

.highlights-h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -.4px;
    color: var(--el-text-color-primary);
    transition: color .5s;
    margin-bottom: .75em;
}

.highlights-p {
    color: #ebebeb99;
    font-weight: 400;
    font-size: 15px;
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
  