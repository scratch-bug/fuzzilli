for (let v0 = 0; v0 < 5; v0++) {
    const v1 = [-9.370648282134732e+307,-1.7976931348623157e+308,1000.0];
    function f2() {
        return v1;
    }
    Object.defineProperty(v1, "toString", { configurable: true, get: f2 });
    v1.pop();
}
