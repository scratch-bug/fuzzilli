function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [2.4108082532991067e+307];
Object.defineProperty(v5, 536870889, { enumerable: true, value: WeakMap });
const v7 = new Proxy(v5, F1);
v7.c = v7;
Object.seal(v7);
