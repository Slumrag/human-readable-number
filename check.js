const toReadable = require("./src");
for (let index = 100; index < 1000; index++) {
    let res = toReadable(index);
    console.log("#" + index, res);
}
