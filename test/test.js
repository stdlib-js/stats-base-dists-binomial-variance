/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var variance = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var v = variance( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 10, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( NaN, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var v;

	v = variance( 1.5, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( -2, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( -1, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 2.5, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( PINF, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', function test( t ) {
	var v;

	v = variance( 20, -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 20, 1.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 20, NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( 20, PINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the variance of a binomial distribution', function test( t ) {
	var expected;
	var n;
	var p;
	var y;
	var i;

	expected = data.expected;
	n = data.n;
	p = data.p;
	for ( i = 0; i < n.length; i++ ) {
		y = variance( n[i], p[i] );
		t.equal( y, expected[i], 'n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
