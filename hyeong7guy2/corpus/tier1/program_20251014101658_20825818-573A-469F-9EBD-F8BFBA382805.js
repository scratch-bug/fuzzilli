const v0 = [56896,255,25915,-15544,10,7,-8];
const v2 = {};
const v11 = {
    getOwnPropertyDescriptor(a4, a5) {
        const v7 = { configurable: true };
        function f8(a9, a10) {
            return a10;
        }
        Object.defineProperty(v7, "set", { enumerable: true, value: f8 });
        return v7;
    },
};
const v12 = new Proxy(v2, v11);
v12.foo = v0;
