function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [this,this,this,this,this];
    function F7(a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        this.withCalendar = false;
    }
    const v12 = new F7();
    v12.toJSON = v4;
    const v13 = /(?<a>)/dusygmi;
    const v14 = new F7();
    const v15 = [v13,-5.0,v14,v14];
    v15.push(v12);
    const v19 = JSON.stringify({ b: v15 });
    const v20 = JSON.parse;
    v20.apply(JSON, [v19]);
}
new F0(F0, F0);
