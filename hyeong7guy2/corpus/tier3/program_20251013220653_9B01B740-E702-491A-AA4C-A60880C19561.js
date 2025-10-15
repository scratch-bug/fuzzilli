const v1 = ([]).constructor;
const v12 = {
    get p() {
        const v4 = eval();
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            try { v4(v1); } catch (e) {}
            try {
                Int16Array(this, v4);
            } catch(e10) {
            }
        }
        const v11 = new F5();
        return v11;
    },
};
v12.p;
