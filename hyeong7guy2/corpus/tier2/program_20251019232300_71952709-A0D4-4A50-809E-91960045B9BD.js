let v1 = -65537n ^ -65537n;
v1++;
function f3() {
    return v1;
}
function f4() {
    for (let v6 = 0; v6 < 5; v6++) {
        const t7 = 0.5999524236364984;
        t7[v1] <<= v6;
    }
}
function f7(a8) {
    return a8;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f7 });
new Uint16Array(f3);
