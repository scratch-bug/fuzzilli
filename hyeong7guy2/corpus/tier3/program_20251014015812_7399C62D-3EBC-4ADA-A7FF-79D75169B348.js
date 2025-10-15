try { ("").next(); } catch (e) {}
const v8 = {
    [Symbol]() {
        const v7 = {
            next() {
                let constructor = 257;
                return this;
            },
        };
    },
};
