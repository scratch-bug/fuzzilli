const v1 = new BigInt64Array();
const v2 = [-1000.0,2.220446049250313e-16,5.0,0.16413857515348462];
try { Object.assign(v1, v2); } catch (e) {}
