const v0 = [3.0,-1000000000000.0,-1e-15,Infinity,-2997.9985143049853,374.41143672406383,-0.0,248061.2102249409,2.220446049250313e-16,-4.0];
const v1 = `
    parseInt("und🤯efined");
`;
const v5 = { type: v1 };
v5.toJSON = v0;
const v7 = JSON.stringify(v5);
const v8 = JSON.parse;
v8.apply(JSON, [v7]);
