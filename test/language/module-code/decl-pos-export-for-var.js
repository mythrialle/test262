// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement cannot contain an `export` declaration
id: sec-modules
negative: SyntaxError
flags: [module]
---*/

for (var x = 0; false;)
  export default null;
