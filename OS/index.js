// require the os module
// The os module provides operating system-related utility methods and properties.
const os = require("os");

// to get architecture

const arch = os.arch();

console.log(arch);

// to get the version

const v = os.version();
console.log(v);

const cpu = os.cpus();

console.log(cpu);


// to get the free Memory in bytes

const freeMemory = os.freemem();

console.log(freeMemory);
