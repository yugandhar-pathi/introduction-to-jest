
//Sample promise function which is resolved after 100ms
const dataPromise = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve('success'),100)
  });
}

const fetchData = async () => {
  const receivedData = await dataPromise();
  return receivedData;
}

export { fetchData, dataPromise };