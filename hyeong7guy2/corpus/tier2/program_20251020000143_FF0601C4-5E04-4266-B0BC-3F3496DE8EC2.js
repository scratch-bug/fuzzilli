const v1 = /(?<a>)/dusygmi;
v1.toJSON = 0.0;
const v2 = [v1];
const v5 = JSON.stringify({ arguments: v2 });
const v6 = JSON.parse;
const v7 = [v5,v6];
try { v6.apply(JSON, v7); } catch (e) {}
