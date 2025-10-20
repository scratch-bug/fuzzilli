const v1 = Symbol.iterator;
const v2 = [2.4108082532991067e+307];
const v5 = new Proxy(v2, { preventExtensions: v1 });
try { Object.seal(v5); } catch (e) {}
