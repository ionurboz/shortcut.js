/**
 * Copyright 2015-2016, Blaine Kasten
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Unbinds a shortcut
 * @chainable
 *
 * @providesModule Unbind
 */

import mappings from './Mappings';

export default function unbind() : void {
  mappings[this.keys][this.domNode] = [];

  return this;
}
