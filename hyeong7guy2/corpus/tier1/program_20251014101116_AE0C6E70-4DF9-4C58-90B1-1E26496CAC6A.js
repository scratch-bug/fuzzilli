const v0 = [56896,255,25915,-15544,10,7,-8];
const v2 = {};
const v8 = {
    getOwnPropertyDescriptor(a4, a5) {
        return { configurable: true };
    },
};
const v9 = new Proxy(v2, v8);
v9.foo = v0;
