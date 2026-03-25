import * as xlsx from "xlsx";
import * as path from  "path";
import read from "fs";

export const fetchCreditData = (fileName : string,sheetName : string) : any =>{
    let filePath = path.join(process.cwd()+"/data/"+fileName);

    try{
        let workBook = xlsx.readFile(filePath);
        let workSheet = workBook.Sheets[sheetName];
        let data : any = xlsx.utils.sheet_to_json(workSheet);
        return data;
    }
    catch(e){
        console.error("Error reading the excel file : ",e);
        throw new Error("Error reading the excel file from the location");
    }
}