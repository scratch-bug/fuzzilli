const v2 = {
    set f(a1) {
    },
};
const v6 = new Proxy(v2, { get: Object });
v6.f;
