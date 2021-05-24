import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

 class EVApi {
     // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${EVApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(googleid) {
    // console.log(`in getCurrentUser function, goolgeid:${googleid}`)
    let res = await this.request(`users/${googleid}`);
    // console.log(`res.user: ${res.user}`)
    return res.user;
  }
  
  /** Get companies (filtered by name if not undefined) */
  static async getEVs(name) {
    let res = await this.request("evs", { name });
    return res.evs;
  }

   /** Get details on a EV by handle. */ 
  static async getEV(id) {
    let res = await this.request(`evs/${id}`);
    return res.company;
  }

  /** Get token for login from username, password. */
  static async login(data) {
    // console.log(`in login function`)
    // console.log(`data for login: ${data}`)
    let res = await this.request(`auth/token`, {"googleid": data}, "post");
    return res.token;
  }

  /** Signup for site. */
  static async signup(data) {
    // console.log(`in signup function`)
    let res = await this.request(`auth/google`, data, "post");
    return res.token;
  }

    /** Save user profile page. */
  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

 }

 export default EVApi;