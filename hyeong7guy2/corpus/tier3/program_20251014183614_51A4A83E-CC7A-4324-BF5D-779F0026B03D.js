const v2 = new Uint8ClampedArray(64);
JSON.toJSON = v2;
JSON.stringify(JSON, 1024, 1024);
