const v0 = [-65535,30021,21056,1977323203,-2];
v0[3] = v0;
function f2(a3, a4, a5) {
    return a4;
}
const v11 = {
    set d(a8) {
    },
    set a(a10) {
    },
    type: "function",
};
v11.getMilliseconds = v0;
const v12 = new Worker(f2, v11);
v12.postMessage(v11);
