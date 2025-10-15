const v2 = Array(473);
v2[460] = 473;
function f3(a4, a5, a6) {
    return a5;
}
const v9 = [v2];
const v10 = { arguments: v9, type: "function" };
v2.__proto__ = Array;
new Worker(f3, v10);
