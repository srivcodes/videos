import axios from "axios";

const KEY = "AIzaSyD7OaHV7OOVZmvbHo5oYjMzsbCLM1XJP84";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

// AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho