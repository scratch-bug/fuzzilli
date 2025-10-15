const v1 = [Uint8Array];
v1[90] = Float64Array;
function f3(a4, a5, a6) {
    return v1;
}
const v9 = [v1];
new Worker(f3, { arguments: v9, type: "function" });
