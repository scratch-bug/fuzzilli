const v5 = {
    construct(a1, a2) {
        const v4 = Reflect.construct(a1, a2);
        v4.name = v4;
        return v4;
    },
};
function f7() {
}
const v8 = new Proxy(f7, v5);
v8.prototype = v8;
for (let v9 = 0; v9 < 5; v9++) {
    Reflect.construct(v8, [v9,v9,v9]);
}
