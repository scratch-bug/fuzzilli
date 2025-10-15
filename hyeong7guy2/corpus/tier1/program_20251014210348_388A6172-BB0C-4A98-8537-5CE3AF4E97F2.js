const v1 = {};
const v5 = {
    getOwnPropertyDescriptor(a3, a4) {
        return this;
    },
};
const v6 = new Proxy(v1, v5);
try { v6.hasOwnProperty(); } catch (e) {}
