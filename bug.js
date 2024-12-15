```javascript
// Incorrect usage of $inc operator for updating an embedded document's field
db.collection.updateOne({"_id": 1, "items": {"name": "item1"}}, {"$inc": {"items.$.price": 1}});
```