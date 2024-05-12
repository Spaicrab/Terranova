import axios from "axios"

export default async function GetClientCountry() {
    let countryName = "";
    await axios.get('https://ipapi.co/json/')
        .then((res) => {
            countryName = res.data.country_name;
        }).catch((err) => {
            if (!err?.response) {
                console.log("No server response");
            } else {
                console.log(err.response.data);
            }
        });
    return countryName;
};