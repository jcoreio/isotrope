// @flow

import {
  sideInDirection, axisFor, oppositeOf, dimensionFor,
  oppositeAxis, oppositeSide, oppositeDirection, oppositeDimension,
} from '../lib/index.js'
import type {Side, Direction, Axis, Dimension} from '../lib'

let a: Side = sideInDirection['left']
// $FlowFixMe
let b: Direction = sideInDirection['left']

let c: Axis = axisFor['left']
let d: Axis = axisFor['width']
let e: Axis = axisFor['up']

let f: Axis = oppositeOf['x']
let g: Direction = oppositeOf['up']
let h: Direction = oppositeOf['left']
let i: Side = oppositeOf['left']
let j: Dimension = oppositeOf['width']

let k: Dimension = dimensionFor['left']
let l: Dimension = dimensionFor['x']

let m: Axis = oppositeAxis['x']
let n: Direction = oppositeDirection['up']
let o: Direction = oppositeDirection['left']
let p: Side = oppositeSide['left']
let q: Dimension = oppositeDimension['width']

// $FlowFixMe
let r: Direction = oppositeOf['x']
// $FlowFixMe
let s: Side = oppositeOf['up']
// $FlowFixMe
let t: Axis = oppositeOf['left']
// $FlowFixMe
let u: Dimension = oppositeOf['left']
// $FlowFixMe
let v: Direction = oppositeOf['width']
