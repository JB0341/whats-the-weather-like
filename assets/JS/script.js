let city;
const APIKey = '23ee27ae7fea00b733ff0487c918a15a';
const url = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={23ee27ae7fea00b733ff0487c918a15a}`;


const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('XMLHttpRequest Response \n-------------');
        console.log(xhr.response);
    }
};
xhr.open('GET', requestUrl);
xhr.send();

$.ajax({
    url:requestUrl,
    method: 'GET',
}).then(function (response) {
    console.log('Ajax Response \n----------');
    console.log(response);
});
