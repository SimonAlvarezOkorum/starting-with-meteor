import { ContactsCollection } from "../collections/ContactsCollection"
import { Meteor } from "meteor/meteor"

Meteor.publish('myContacts', function publishAllContacts() {
  const { userId } = this;
  if (!userId) {
    throw Meteor.Error('Access denied');
  }
  return ContactsCollection.find({userId, archived: { $ne: true } },
    { fields: { createdAt: false } });
}); // Cursor → Live Query → Observer to watch the data in mongodb