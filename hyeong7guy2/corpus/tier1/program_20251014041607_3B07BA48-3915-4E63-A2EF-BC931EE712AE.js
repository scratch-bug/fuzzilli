const v5 = {
    construct(a2, a3) {
        return Reflect;
    },
};
const v6 = v5.construct(v5, v5);
try { v6.ownKeys(3331); } catch (e) {}
