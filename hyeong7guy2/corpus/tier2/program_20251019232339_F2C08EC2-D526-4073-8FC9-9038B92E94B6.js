const v0 = [56896,255,25915,-15544,10,7,-8];
const v2 = {};
const v9 = {
    getOwnPropertyDescriptor(a4, a5) {
        const v7 = { configurable: true };
        function f8() {
            return f8;
        }
        v7.get = f8;
        return v7;
    },
};
const v10 = new Proxy(v2, v9);
v10.foo = v0;
