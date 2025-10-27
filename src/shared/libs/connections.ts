import axios from "axios";

export const waitlistClient = axios.create({
  baseURL: "https://api.getwaitlist.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
