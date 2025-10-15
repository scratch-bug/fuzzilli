function f() {}

for (let i = 0; i < 20000; i++) {
    f.bind(null, i);
}

let done = false;
const it = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                if (!done) {
                    done = true;
                    new Array(0x100000);
                }
                return { done: true, value: 0 };
            }
        };
    }
};

f.bind(null, ...it);