//Business logic for addressbook
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

//business logic for contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = FirstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};