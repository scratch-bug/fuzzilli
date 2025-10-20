const v1 = WeakMap.a;
const v2 = [9007199254740990];
v2[5] = v2;
function f4(a5, a6, a7) {
    return WeakMap;
}
const v9 = { type: "function" };
v9.arguments = v1;
v9.flushDenormals = v2;
const v10 = new Worker(f4, v9);
v10.postMessage(v9);
