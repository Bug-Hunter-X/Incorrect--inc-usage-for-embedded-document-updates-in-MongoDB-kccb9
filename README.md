# Incorrect $inc usage for embedded document updates in MongoDB
This example demonstrates an incorrect usage of the `$inc` operator within a MongoDB `updateOne` operation when targeting a field in an embedded document.  The issue lies in the incorrect use of the positional operator `$`.  The provided solution offers the correct way to perform this operation.

## Bug
The bug is in the following line:
```javascript
db.collection.updateOne({"_id": 1, "items": {"name": "item1"}}, {"$inc": {"items.$.price": 1}});
```
This attempts to increment the `price` field of an embedded document named "item1", but the positional operator `$` is not correctly used with embedded document updates.

## Solution
The corrected code uses dot notation to correctly target the embedded document's field:
```javascript
db.collection.updateOne({"_id": 1, "items.name": "item1"}, {"$inc": {"items.$.price": 1}});
```
Alternatively, if you know the index of the embedded document:
```javascript
db.collection.updateOne({"_id": 1}, {"$inc": {"items.0.price": 1}}); // Increment price of the first item
```