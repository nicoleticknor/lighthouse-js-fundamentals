for(let x = 100; x <201; x++) {
  x % 3 === 0 && x % 4 === 0 ? console.log('LoopyLighthouse') :
  x % 3 === 0 ? console.log('Loopy') :
  x % 4 === 0 ? console.log('Lighthouse') :
  console.log(x);
}
