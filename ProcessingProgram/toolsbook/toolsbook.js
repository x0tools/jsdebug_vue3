import * as fs from 'fs';
import * as path from "path";
let pt = new URL(import.meta.url).pathname;

const rootPath = path.resolve(pt, '../../../');
let directoryPath =new URL(`${rootPath}\\src\\assets\\book\\tools`).pathname;
directoryPath = directoryPath.substring(1, directoryPath.length);

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j].ii > arr[j + 1].ii) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
   }

function getFiles(dirPath,index) {

    
    let filesList = [];
    let items = fs.readdirSync(dirPath);
    for (let i = 0; i < items.length; i++) {
        let fullPath = path.join(dirPath, items[i]);
        let stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
           let itemss = items[i].split(".");
           if(itemss.length==2){
            filesList.push({
                dirname: itemss[1],
                ii:new Number(itemss[0]) ,
                mds: getFiles(fullPath,++index)
            });
           }
        } else {
            if(index > 0){
          
                let itemnames = items[i].split('.')
                if(itemnames[1] == "md"){
                    filesList.push(itemnames[0]);
                }
            }
            
        }
    }
    
    return filesList;
}


let result = getFiles(directoryPath,0);
result = bubbleSort(result);
fs.writeFileSync('./src/assets/book/tools/index.json', JSON.stringify(result, null, 2));


// function traverseDirectory(dirPath, jsonArray) {
//     const files = fs.readdirSync(dirPath);

//     debugger;
//     files.forEach((file) => {
//         const filePath = path.join(dirPath, file);
//         const fileStat = fs.statSync(filePath);
 
//         if (fileStat.isDirectory()) {
//             traverseDirectory(filePath, jsonArray);
//         } else if (file.endsWith(".md")) {
//             const fileName = path.basename(filePath, ".md");

//             const jsonObject = {
//                 fileName: fileName
//             };
//             jsonArray.push(jsonObject);
//         }
//     });
// }
// // 初始化jsonArray
// const jsonArray = [];

// // 开始遍历
// traverseDirectory(directoryPath, jsonArray);
// // 将jsonArray写入到output.json文件中
// fs.writeFileSync("output.json", JSON.stringify(jsonArray, null, 2));

// console.log("所有Markdown文件已成功转换为JSON文件。");



