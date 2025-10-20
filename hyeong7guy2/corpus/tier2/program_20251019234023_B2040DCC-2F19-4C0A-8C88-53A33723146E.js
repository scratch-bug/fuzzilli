let v0 = 60985n;
const v4 = {
    construct(a2, a3) {
        v0 **= v0;
        return this;
    },
};
const v5 = v4.construct(v0, v0);
try { v5.construct(v0, v5, v4); } catch (e) {}
