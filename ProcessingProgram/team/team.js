
// 导入 fs 和 path 模块
import * as fs from 'fs';
import * as path from "path";
// 导入 fileURLToPath 方法
import { fileURLToPath } from 'url'
// 获取当前文件路径
const __filenameNew = fileURLToPath(import.meta.url)
// 获取当前文件所在的目录
const __dirnameNew = path.dirname(__filenameNew)
// 获取 teamDataPath 路径
let teamDataPath = path.resolve(`${__dirnameNew}`,"./data/");


// 读取 teamDataPath 目录下的文件
let items =  fs.readdirSync(teamDataPath)
// 初始化 dataAllText
let dataAllText = "[";
// 遍历 items 数组
for(let index in items ){
    // 读取每一个文件的内容
    let itemtext = fs.readFileSync(path.resolve(`${teamDataPath}`,items[index]),"utf-8")
    // 打印文件内容
    console.log(itemtext);
    // 将文件内容拼接到 dataAllText 中
    dataAllText = dataAllText + itemtext + ",";
}
// 将 dataAllText 末尾的逗号去掉
dataAllText = dataAllText.substring(0,dataAllText.length-1);
// 将 dataAllText 末尾加上括号
dataAllText = dataAllText + "]";
// 将 dataAllText 写入到当前文件所在的目录下的 dataAll.json 文件中
fs.writeFileSync(path.resolve(`${__dirnameNew}`,`./dataAll.json`),dataAllText);

