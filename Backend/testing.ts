import path from "path";
import fs from "fs";
import si from "systeminformation";

// const pathExist = fs.existsSync('/mnt/data')


// console.log(pathExist)



const envPath = path.resolve(process.cwd(), ".env");

const env: Record<string, string> = {};
fs.readFileSync(envPath, "utf-8")
    .split("\n")
    .forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const eqIndex = trimmed.indexOf("=");
        if (eqIndex === -1) return;
        const key = trimmed.slice(0, eqIndex).trim();
        const value = trimmed.slice(eqIndex + 1).trim();
        if (key) env[key] = value;
    });
console.log(env.DIRECTORYY || "testing")
console.log(process.cwd())


    const osInfo = await si.osInfo();
    const platform = osInfo.platform.toLowerCase();
    const isWindows = platform === "win32" || platform === "windows";
    const directory = env.DIRECTORY
    // const isMac = platform === "darwin"
    const pathExist = pathExists('/mnt/data')
    const directoryExist = directory && pathExists(directory)

let dataDir:string

if(directoryExist) dataDir = path.join(directory, "minio-data")
else if(isWindows) dataDir = "C:\\minio\\data";
else if(pathExist) dataDir = path.join("/mnt/data", 'minio-data')
else dataDir = path.join(process.cwd(), "minio-data");


function pathExists(path: string): boolean {
    return fs.existsSync(path);
  }

  console.log(dataDir)