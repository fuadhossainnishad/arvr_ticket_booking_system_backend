import path from "path";
import fs from 'fs';

export const uploadsDir=path.join(__dirname,'../uploads');
if(!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir,{recursive:true})
}
