import * as fs from 'fs';
import * as path from "path";
let pt = new URL(import.meta.url).pathname;

const rootPath = path.resolve(pt, '../../../');
let directoryPath =new URL(`${rootPath}\\src\\assets\\book\\tools`).pathname;
directoryPath = directoryPath.substring(1, directoryPath.length);

debugger;

//遍历文件夹中的md文档生成对应的json文件
function traverseDirectory(dirPath, jsonArray) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const fileStat = fs.statSync(filePath);
 
        if (fileStat.isDirectory()) {
            traverseDirectory(filePath, jsonArray);
        } else if (file.endsWith(".md")) {
            const fileName = path.basename(filePath, ".md");

            const jsonObject = {
                fileName: fileName
            };
            jsonArray.push(jsonObject);
        }
    });
}
// 初始化jsonArray
const jsonArray = [];

// 开始遍历
traverseDirectory(directoryPath, jsonArray);
// 将jsonArray写入到output.json文件中
fs.writeFileSync("output.json", JSON.stringify(jsonArray, null, 2));

console.log("所有Markdown文件已成功转换为JSON文件。");



