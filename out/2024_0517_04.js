let trigger_gc = false;

class C {}

const P = new Proxy(C, {
    construct(target, args, newTarget) {
        if (trigger_gc) {
            new Array(0x40000);
            trigger_gc = false;
        }
        return Reflect.construct(target, args, newTarget);
    }
});

function hot_function() {
    new P();
    new Array(1);
}

for (let i = 0; i < 20000; i++) {
    hot_function();
}

trigger_gc = true;

hot_function();