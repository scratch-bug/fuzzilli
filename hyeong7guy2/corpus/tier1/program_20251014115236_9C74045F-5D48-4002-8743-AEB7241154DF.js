const v1 = [-Infinity,2.0,-1000000000.0,-0.0];
v1[7] = 4096;
function f2(a3) {
    return a3;
}
const v6 = [v1];
new Worker(f2, { arguments: v6, type: "function" });
