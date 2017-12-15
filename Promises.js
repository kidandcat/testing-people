new Promise((res, rej) => {
  res("aaa");
}).then(result1 => {
  console.log("result1", result1);
  return Promise.resolve("bbb");
}).then(result2 => {
  console.log("result2", result2);
});


// What does this print?
