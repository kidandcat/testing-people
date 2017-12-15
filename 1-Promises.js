new Promise((a, r) => {
  a("aaa");
}).then(result1 => {
  console.log("result1", result1);
  return "bbb";
}).then(result2 => {
  console.log("result2", result2);
  return Promise.resolve("ccc");
}).then(result3 => {
  console.log("result3", result3);
  return Promise((a, r) => {
    setTimeout(()=>{
      a("ddd");
    },1000);
  });
}).then(result4 => {
  console.log("result4", result4);
});


// What does this print?
