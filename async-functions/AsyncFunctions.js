
const receivedData = null;

const getData = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve('success'),100)
  });
}

const fetchData = async () => {
  const receivedData = await getData();
  return receivedData;
}

export { fetchData };