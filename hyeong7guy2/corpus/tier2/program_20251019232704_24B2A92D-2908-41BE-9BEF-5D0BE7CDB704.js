const v5 = {
    construct(a2, a3) {
        return Reflect;
    },
};
const v6 = v5.construct(24392, v5);
try { v6.defineProperty(24392); } catch (e) {}
