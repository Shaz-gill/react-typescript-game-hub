import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "019d6288ddbf4c6c801a161e29d08a7d",
  },
});
