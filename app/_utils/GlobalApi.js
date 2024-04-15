const axios = require("axios");
const Sendemail = async (data) => {
  const result = await axios.post("http://localhost:3000/api/send", data);
  return result;
};

export default Sendemail;
