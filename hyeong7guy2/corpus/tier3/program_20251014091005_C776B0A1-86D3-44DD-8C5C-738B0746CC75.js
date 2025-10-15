const v7 = {
    [Symbol]() {
        const v6 = {
            next() {
                return ("🙌🏿").toWellFormed();
            },
        };
    },
};
function f8() {
    return v7;
}
(129).toString().lastIndexOf(f8);
