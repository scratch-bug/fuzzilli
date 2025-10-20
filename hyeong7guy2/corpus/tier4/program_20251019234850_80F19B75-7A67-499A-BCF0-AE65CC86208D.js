const v3 = JSON.stringify({ p1: 1.1 });
const v4 = JSON.parse;
const v5 = [v3,v4];
try { v4.apply(JSON, v5); } catch (e) {}
