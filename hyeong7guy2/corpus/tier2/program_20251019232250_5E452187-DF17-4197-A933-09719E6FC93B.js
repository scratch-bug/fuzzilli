const v2 = Uint16Array in [-1.7976931348623157e+308,-0.0,-1.0,-219.92510053249134,6.304488226032255,4.0,678902.8804508455];
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = { done: v2 };
        const v16 = [JSON.stringify(v12)];
        Reflect.apply(JSON.parse, v12, v16);
        const v19 = this.constructor;
        try { new v19(); } catch (e) {}
    }
    new F8();
}
new F3(Uint16Array, F3, F3);
