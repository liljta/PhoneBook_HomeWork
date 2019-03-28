var contacts = [];

function Contact(name, surname, phone) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

function GetData() {
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var phone = parseInt(document.querySelector(".phone").value);
    var contact = new Contact(name, surname, phone);
    Validate(contact);
}

function Validate(contact) {
    /*console.log("name = ", contact.name);
    console.log("surname = ", contact.surname);
    console.log("phone = ", contact.phone);*/
    var error = document.querySelector(".error");
    error.innerHTML = '';

    if (contact.name.length < 2 || contact.name.length > 20) {
        error.innerHTML = "Incorrect input name.";
    } else if (contact.surname.length < 2 || contact.surname.length > 25) {
        error.innerHTML = "Incorrect input surname.";
    } else if (contact.phone < 100000000000 || contact.phone > 999999999999) {
        error.innerHTML = "Incorrect phone";
    } else {
        console.log("Good!");
        contacts.push(contact);
        showPhoneBook();
        document.querySelector('.contact-form').reset();
    }
}

function showPhoneBook() {
    console.clear();
    contacts.forEach(function (item, index) {
        console.log('Contact array item ' + index);
        console.log('Name: ' + item.name);
        console.log('Surname: ' + item.surname);
        console.log('Phone: ' + item.phone);
    });
    var resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = '';
    contacts.forEach(function (item, index) {
        //result += '<p>' + (index + 1) + ': ' + item.name + ' ' + item.surname + ' (<b>' + item.phone + '</b>)';
        var contactP = document.createElement('p');
        var num = document.createElement('span');
        num.innerText = index + 1;
        contactP.appendChild(num);
        var name = document.createElement('span');
        name.innerText = item.name;
        contactP.appendChild(name);
        var surname = document.createElement('span');
        surname.innerText = item.surname;
        contactP.appendChild(surname);
        var phone = document.createElement('span');
        phone.innerText = item.phone;
        contactP.appendChild(phone);
        resultDiv.appendChild(contactP);
    });
}
