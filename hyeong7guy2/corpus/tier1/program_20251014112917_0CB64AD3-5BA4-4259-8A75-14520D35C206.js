const v4 = {
    next() {
        eval("function");
        return "function";
    },
};
try { v4.next(); } catch (e) {}
