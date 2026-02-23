import os from "os";

const osInfo = {
  Total_CPU: os.cpus(),
  Total_RAM: os.totalmem(),
  Free_RAM: os.freemem(),
  Network_Interface: os.networkInterfaces(),
  OS_Platform: os.platform(),
};

console.log(osInfo);
