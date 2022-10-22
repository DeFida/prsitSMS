import axios from "axios";

export default class Api {
    login(login, password) {
        return axios.post("https://sms.ura.nis.edu.kz/root/Account/LogOn", {login, password})
    }
}