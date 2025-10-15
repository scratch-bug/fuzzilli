function f() {
    for (let i = 0; i < 10; ++i) {}
}

function trigger(do_mutate) {
    const o = new f();
    if (do_mutate) {
        o.constructor.prototype = {};
    }
    new f();
}

for (let i = 0; i < 1000; ++i) {
    new f();
    trigger(false);
}

trigger(true);