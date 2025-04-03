// Recursion CountDown
function countDown(value) {
  if (value === 0) {
    console.log("Stop the function");
    return;
  }
  console.log(value);

  countDown(value - 1);
}

countDown(5);
