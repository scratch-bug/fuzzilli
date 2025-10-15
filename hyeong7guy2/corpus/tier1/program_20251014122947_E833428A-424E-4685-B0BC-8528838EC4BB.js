const v0 = [-16,5];
const v5 = {
    construct(a2, a3) {
        v0.sort();
        return a3;
    },
};
function f7() {
    return Proxy;
}
const v8 = new Proxy(f7, v5);
Reflect.construct(v8, [v0,v0,v0,v0]);
