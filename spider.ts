
const fetchData = async () => {
  const res = await fetch("https://www.duozhuayu.com/api/book-feeds?limit=10");

  console.log(res);
  
}
fetchData();