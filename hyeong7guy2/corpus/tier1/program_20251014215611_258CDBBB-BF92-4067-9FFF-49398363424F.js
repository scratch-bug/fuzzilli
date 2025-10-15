const v1 = new Int8Array();
function f2(a3) {
    let v4 = -1e-15;
    v4--;
    for (let v6 = 0; v6 < 5; v6++) {
        const v8 = Object(v4);
        function f9() {
            return Object;
        }
        function f10(a11) {
            return a11;
        }
        Object.defineProperty(v8, "valueOf", { configurable: true, enumerable: true, get: f9, set: f10 });
    }
    return f2;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
