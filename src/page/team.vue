<template>
    <el-main>
        <section class="team-text-section">
            <h2>
                排名不分先后 (点击头像查看详情)
            </h2>
        </section>

        <el-space class="team-info-section" wrap style="margin-bottom: 0px;">
            <el-tooltip class="team-info-tooltip" effect="light" placement="top" v-for="(item, index) in userInfoArray"
                :content="'<h2>' + item.name + '</h2>'" raw-content>
                <el-avatar @click="teamUserAvatarOnClick(item)" class="team-user-avatar" :size="140"
                    :src="item.avatar_url"></el-avatar>
            </el-tooltip>
        </el-space>

        <el-drawer class="team-drawer" v-model="selectedUser" :with-header="false">
            <h2 style="margin-top: 20px;"><b style="color: var(--el-color-primary); ">{{ selectedUserInfo.name }}</b></h2>
            <el-divider> </el-divider>
            <el-space alignment="left" direction="vertical" :size="20">
                <div>
                    <el-space :size="10">
                        <el-text size="large" type="info">年龄:</el-text>
                        <h4> {{ selectedUserInfo.age }}</h4>
                    </el-space>
                </div>
                <div>
                    <el-space :size="10">
                        <el-text class="sex-info" size="large" type="info">性别:</el-text>
                        <el-tag :type="selectedUserInfo.sex ? '' : 'danger'">{{ selectedUserInfo.sex ? '男' : '女' }}</el-tag>
                    </el-space>
                </div>

                <div>
                    <el-space :size="10">
                        <el-text class="sex-info" size="large" type="info">联系方式:</el-text>
                        <el-link v-for="item in selectedUserInfo.contacts" target="_blank" :href="item.url"
                            type="primary">{{
                                item.name }}</el-link>
                    </el-space>
                </div>
            </el-space>
            <el-divider>
                <h3>简介</h3>
            </el-divider>
            <div>
                <el-space alignment="left" direction="vertical" :size="20">
                    <el-text class="jianjie-text" type="info">{{ selectedUserInfo.introduction }}
                    </el-text>
                    <el-link v-for="item in selectedUserInfo.project_link" :icon="Link" target="_blank" :href="item.url"
                        :underline="false" class="user-p-link" type="primary">{{ item.name }}</el-link>
                </el-space>
            </div>
            <el-divider>
                <h3>专业领域</h3>
            </el-divider>
            <el-space wrap>
                <el-tag v-for="item in selectedUserInfo.field" class="team-user-tag" size="large" type="warning">{{ item
                }}</el-tag>
            </el-space>
        </el-drawer>

    </el-main>
</template>
<script>
import { ref } from 'vue';
import { Link, View as IconView } from '@element-plus/icons-vue'
import teamInfo from '../assets/data/teamInfo.js';
export default {
    setup() {
        var userInfoArray = ref(teamInfo);
        var selectedUserInfo = ref(userInfoArray.value[0]);
        var selectedUser = ref(false);

        var teamUserAvatarOnClick = function (item) {
            selectedUserInfo.value = item;
            selectedUser.value = true;

        }

        return {
            Link,
            userInfoArray,
            selectedUserInfo,
            selectedUser,
            teamUserAvatarOnClick,


        }
    }
}
</script>
<style scope >
.user-p-link {
    display: flex;
    justify-content: start;
    margin-left: 20px;
}

.team-drawer {
    min-width: 400px;
}

.team-user-avatar {
    box-shadow: var(--el-box-shadow);
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    margin-top: 40px;
}

.el-popper {
    color: var(--el-color-primary);
}

.sex-info {
    display: flex;
    margin-bottom: 2px;

}

.jianjie-text {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
}

.team-text-section {
    height: auto 0;
    margin-left: 50px;
    margin-right: 50px;
    padding: 20px 0px 80px 0px;
    display: flex;
    justify-content: center;
}

.team-info-section {

    margin-left: 200px;
    margin-right: 200px;
    padding: 10px 0px 80px 0px;
    display: flex;
    justify-content: center;
}
</style>
      