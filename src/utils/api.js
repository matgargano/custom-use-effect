export const get = async () => {
  //simulates a getting api call
  await new Promise(function(resolve) {
    setTimeout(resolve({ text: "gotText yo" }), 1500);
  });
};

export const set = async (key, value) => {
  //simulates a setting api call
  await new Promise(function(resolve) {
    setTimeout(resolve, 1500);
  });
  return { foo: "set" };
};
