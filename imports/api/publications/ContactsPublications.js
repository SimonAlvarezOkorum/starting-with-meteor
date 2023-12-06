import { ContactsCollection } from "../collections/ContactsCollection"
import { Meteor } from "meteor/meteor"

Meteor.publish('allContacts', function publishAllContacts() {
  return ContactsCollection.find();
}); // Cursor → Live Query → Observer to watch the data in mongodb

Meteor.publish('contacts', function publishAllContacts() {
  return ContactsCollection.find({ archived: { $ne: true } });
}); // Cursor → Live Query → Observer to watch the data in mongodb