import si from "systeminformation";

const cpu    = await si.cpu();        // manufacturer, brand, speed, cores
const mem    = await si.mem();        // total, used, free RAM
const osInfo = await si.osInfo();     // platform, distro, arch, hostname
const fsSize = await si.fsSize();     // per-drive size, used, available
const usb = await si.usb()
const dockerVolumes = await si.dockerVolumes()
const dockerContainer = await si.dockerContainers()
const dockerImages = await si.dockerImages()
const wifiConnections = await si.wifiConnections()

console.log(cpu)
console.log(mem)
console.log(osInfo)
console.log(fsSize)
console.log(usb)
console.log(dockerVolumes)
console.log(dockerContainer)
console.log(dockerImages)
console.log(wifiConnections)

/*

Version 5.30.0: processes() added user (windows) - needed to be reverted
Version 5.29.0: osInfo() added OS code name (windows)
Version 5.28.0: cpuTemperature() added suppurt for macos-temperature-sensor (macOS)
Version 5.27.0: mem() added reclaimable memory
Version 5.26.0: getStatic(), getAll() added usb, audio, bluetooth, printer
Version 5.25.0: versions() added homebrew
Version 5.24.0: versions() added bun and deno
Version 5.23.0: usb() added serial number (linux)
Version 5.22.0: wifiConnections() added signal quality
Version 5.21.0: graphics() added subVendor (linux)
Version 5.20.0: mem() added writeback and dirty (linux)
Version 5.19.0: currentLoad() added steal and guest time (linux)
Version 5.18.0: fsSize() added optional drive parameter
Version 5.17.0: graphics() added positionX, positionY (macOS)
Version 5.16.0: fsSize() added rw property
Version 5.15.0: blockDevices() added device
Version 5.14.0: blockDevices() added raid group member (linux)
Version 5.13.0: networkConnections() added process name (macOS)
Version 5.12.0: cpu() added performance and efficiency cores
Version 5.11.0: networkInterfaces() added default property and default parameter
Version 5.10.0: basic android support
Version 5.9.0: graphics() added properties (macOS)
Version 5.8.0: disksIO() added waitTime, waitPercent (linux)
Version 5.7.0: diskLayout() added S.M.A.R.T for Windows (if installed)
Version 5.6.0: cpuTemperature() added socket and chipset temp (linux)
Version 5.5.0: dockerVolumes() added
Version 5.4.0: dockerImages() added
Version 5.3.0: osInfo() added remoteSession (win only)
Version 5.2.0: wifiInterfaces() and wifiConnections() added
Version 5.1.0: memLayout() added ECC flag, bios() added language, features (linux)

*/


