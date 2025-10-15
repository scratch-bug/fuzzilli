const v6 = {
    construct(a3, a4) {
        Date.__proto__ = a4;
        a4[0] = 1.1;
        return a4;
    },
};
function f8() {
    return v6;
}
const v9 = new Proxy(f8, v6);
const v10 = new v9();
v10.push(Symbol);
