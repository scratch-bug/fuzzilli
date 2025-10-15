const v2 = new Uint8Array();
v2.toJSON = null;
function f4(a5, a6) {
    return a5;
}
const v9 = [0,v2];
new Worker(f4, { arguments: v9, type: "function" });
