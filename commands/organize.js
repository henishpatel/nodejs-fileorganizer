let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organizeFn(src){
    let finalPath;
    if(src==undefined){
        console.log("Enter Valid Path");
        return;
    }else{
        let ifExist = fs.existsSync(src);
        if(ifExist){
         
         finalPath =   path.join(src,"organized_files");
        
        fs.mkdirSync(finalPath);
        }else{
            console.log("Enter Valid Path");
            return;
        }
    }

    organizeFiles(src,finalPath);

}

function organizeFiles(src,dest){
    
    let fileType = fs.readdirSync(src);
    for(let i=0;i<fileType.length;i++){
        
      let filepath =  path.join(src,fileType[i]);
     
       let status = fs.lstatSync(filepath);
      
       if(status.isFile()){
         let type = getType(fileType[i]);
        
         copyFiles(filepath,dest,type);
       }

    }
}

function copyFiles(src, dest, type){
    
    let typePath = path.join(dest,type);

    if(fs.existsSync(typePath)==false){
        
         fs.mkdirSync(typePath);
    }
    
   
    let basename = path.basename(src);
    let destPath = path.join(typePath,basename);
    fs.copyFileSync(src,destPath);

}

function getType(filename){
    let ext = path.extname(filename);

    ext = ext.slice(1);

    for(let type in types){
        let folderType =  types[type];
        for(let i=0;i<folderType.length;i++){
            if(ext == folderType[i]){
                return type;
            }
        }
    }
    return "others";
}

module.exports ={
    organiseKey:organizeFn,
}