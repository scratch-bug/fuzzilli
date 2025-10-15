const v2 = [5.508797198232857,0.44317032114510735,-4.0,-2.220446049250313e-16,245.44159169466525,1000000000000.0,3.0,0.23026395260172983,-1.0];
const v8 = {
    construct(a4, a5) {
        a5.writable = 1000;
        Reflect.defineProperty(BigUint64Array, BigUint64Array, a5);
        return Reflect;
    },
};
function f10() {
    return 1000;
}
const v11 = new Proxy(f10, v8);
Reflect.construct(v11, v2);
Reflect.construct(v11, BigUint64Array);
