const v1 = new Float32Array(Float32Array);
function f3() {
}
function f4(a5) {
    let [v6,v7,v8] = v1;
}
Object.defineProperty(Object, "toISOString", { get: f3, set: f4 });
for (let i10 = 0; i10 < 20000; i10++) {
    Object.toISOString = Object;
}
