exports.handler = async (event, contect, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
        { msg: "Hello World" },
    ) 
  };
};
