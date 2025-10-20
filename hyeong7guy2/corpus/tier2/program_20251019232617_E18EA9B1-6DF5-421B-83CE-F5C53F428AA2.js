function F0() {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
        10 = "o";
    }
    const v4 = new C3();
    v4.toJSON = "o";
    const v6 = [20623,20623,v4,v4];
    const v9 = JSON.stringify({ arguments: v6 });
    const v10 = JSON.parse;
    v10.apply(JSON, [v9]);
}
new F0();
new F0();
