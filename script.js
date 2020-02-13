
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
request.onload = function () {

    // Begin accessing JSON data here
    var parsedJSON = JSON.parse(this.response);
    console.log("parsedJSON" + parsedJSON);
    // console.log(JSON.stringify(parsedJSON)); //{"id":"007","name":"James Bond"}
    // if (parsedJSON.data[1].hasOwnProperty("id")){
    //     console.log(parsedJSON.data[1].employee_name); //007
    //     console.log("true"); //007

    // }
    // else{
    //     console.log("false"); //007
    // }

    if (request.status >= 200 && request.status < 400) {
        parsedJSON.data.forEach(employee => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const emp_id = document.createElement('p');
            emp_id.textContent = "ID: " + employee.id;

            const emp_name = document.createElement('h1');
            emp_name.textContent = "Name: " + employee.employee_name;

            const emp_sal = document.createElement('p');
            emp_sal.textContent = "Salary: $" + employee.employee_salary;

            const emp_age = document.createElement('p');
            emp_age.textContent = "Age: $" + employee.employee_age;

            const emp_img = document.createElement('img');
            if (employee.profile_image === "") {
                emp_img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.business2community.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fblank-profile-picture-973460_640.png&imgrefurl=https%3A%2F%2Fwww.business2community.com%2Fsocial-media%2Fimportance-profile-picture-career-01899604&tbnid=ZbfgeaptF8Y5ZM&vet=12ahUKEwi42NGpw8_nAhUGcK0KHZ2aANoQMygAegUIARCEAg..i&docid=Smb2EEjVhvpzWM&w=640&h=640&q=profile%20image&client=avg&ved=2ahUKEwi42NGpw8_nAhUGcK0KHZ2aANoQMygAegUIARCEAg";
            } else {
                emp_img.src = "Profile Image: $" + employee.profile_image;
            }

            container.appendChild(card);
            card.appendChild(emp_name);
            card.appendChild(emp_id);
            card.appendChild(emp_sal);
            card.appendChild(emp_age);
            card.appendChild(emp_img);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send(); 