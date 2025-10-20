const v1 = new Map();
const v2 = {};
const v4 = new Proxy(v1, v2);
const v6 = new Uint16Array();
v6.toJSON = v4;
function f7(a8, a9) {
    return v2;
}
const v12 = [v6];
new Worker(f7, { arguments: v12, type: "function" });
