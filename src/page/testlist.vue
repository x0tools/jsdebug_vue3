<template>
    <el-table class="testlisttable" resizable="false" border :data="tableData" :row-class-name="tableRowClassName">
        <el-table-column :resizable="false" prop="date" label="序号" width="180" />
        <el-table-column :resizable="false" prop="name" label="题目" width="180" />
        <el-table-column :resizable="false" prop="address" label="简介" />
        <el-table-column :resizable="false" prop="name" label="" width="180" >
            <el-button size="small">Edit</el-button>
        </el-table-column>
    </el-table>
</template>
  
<script >
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const tableData = ref([])
export default {
    setup() {
        var router = useRouter()
        const routergo = function () {
            router.push({ name: 'testitem', query: { itemid: 123, zhiyuan: 123 } })
        }

        tableData.value = []
        for (let index = 0; index < 10; index++) {
            tableData.value.push({
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            })
        }
        //routergo()
        
        const tableRowClassName = function (item) {
            return ''
            if (item.rowIndex === 0) {
                return 'warning-row'
            } else if (item.rowIndex === 1) {
                return 'lv5-row'
            }
            return ''
        }
       

        return {
            routergo,
            tableData,
            tableRowClassName
        }
    }
}
</script>
  
 
  
<style scope>

.testlisttable {
    width: 90%;
    
    margin: 80px auto 0;
    
}

.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .lv5-row {
    --el-table-tr-bg-color: #ff000022
}
</style>

      