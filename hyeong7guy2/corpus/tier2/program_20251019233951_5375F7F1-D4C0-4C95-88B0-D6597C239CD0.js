function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2();
v7.toJSON = -837745194;
const v8 = /(?<a>)/dusygmi;
const v9 = new F2(v7, v8, -837745194);
v9.toJSON = v8;
const v10 = [v8,-5.0,v9];
v10[3] = v7;
const v13 = JSON.stringify({ arguments: v10 });
const v14 = JSON.parse;
v14.apply(JSON, [v13]);
