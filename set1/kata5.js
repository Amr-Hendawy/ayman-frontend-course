let first = "\0a";
let second = "ssssss\0s";
let third = "abc\0o";
let fourth = "asdffdsa\0f";
let fifth = "Hello, World!\0l";

// Description:
// You are given a character string a (terminated with \0) and a character b. Print all characters of a that do not equal to b.

// Examples
// remove('\0a') -> ''
// remove('ssssss\0s') -> ''
// remove('abc\0o') -> 'abc'
// remove('asdffdsa\0f') -> 'asddsa'
// remove('Hello, World!\0l') -> 'Heo, Word!'
