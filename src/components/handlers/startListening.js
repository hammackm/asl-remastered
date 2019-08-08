import axios from "axios";

const startListeningHandler = () => {

    let url = "http://localhost:5000/voicetotext";
    let method = "GET";
    let data = {keyword: "startListening"};

    let authOptions = {
        method: method,
        url: url,
        data: data,
    };

    axios(authOptions)
        .then(function (response) {
        console.log(response.data);
        return response.data
    })
        .catch(function (error) {
            console.log(error);
        });

    return "axios error response"
};

export default startListeningHandler;