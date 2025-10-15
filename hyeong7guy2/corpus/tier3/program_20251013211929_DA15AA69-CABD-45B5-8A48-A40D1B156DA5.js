let v1;
try { v1 = (4096).reverse(); } catch (e) {}
const v2 = () => {
    eval(v1);
    return v1;
};
