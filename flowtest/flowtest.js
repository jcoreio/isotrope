// @flow

import {
  sideInDirection, axisFor, oppositeOf, dimensionFor,
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

