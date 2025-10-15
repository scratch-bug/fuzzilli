const v1 = [5.508797198232857,0.44317032114510735,-4.0,-2.220446049250313e-16,245.44159169466525,1000000000000.0,3.0,0.23026395260172983,-1.0];
const v7 = {
    construct(a3, a4) {
        a4[1554] = v1;
        Reflect.preventExtensions(a4);
        return Reflect;
    },
};
function f9() {
    return f9;
}
const v10 = new Proxy(f9, v7);
Reflect.construct(v10, BigUint64Array);
