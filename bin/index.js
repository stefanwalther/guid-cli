#!/usr/bin/env node
'use strict';

var Guid = require( 'guid' );

console.log( '' );
console.log( 'New Guid: ' + Guid.create().value );
console.log( '' );
