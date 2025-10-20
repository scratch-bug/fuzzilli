const v6 = {
    construct(a1, a2) {
        for (const v5 in Reflect.construct(a1, a2)) {
        }
        return this;
    },
};
function f8() {
}
const v9 = new Proxy(f8, v6);
v9.prototype = v9;
Reflect.construct(v9, [v9]);
