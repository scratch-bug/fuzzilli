const v4 = new SharedArrayBuffer(3, { maxByteLength: 110 });
SharedArrayBuffer.prototype.grow.call(v4, 3);
