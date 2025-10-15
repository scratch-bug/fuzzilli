let v0 = 158;
function f1(a2, a3) {
    const v9 = {
        [Symbol]() {
            'use strict';
            const v8 = {
                [Symbol]() {
                    v0 &&= 2;
                },
            };
        },
    };
    return v0;
}
new Worker(f1, { type: "function" });
