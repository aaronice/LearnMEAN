# LearnMEAN

A repo for MEAN stack learning from edX course - MongoDBx: M101x Introduction to MongoDB using the MEAN Stack.


## Study Notes

### MongoDB quick Pros and Cons:

Pros:
- Fast in-place updates
- Fast queries

Cons:
- No JOINs


### MongoDB schema design principle:

1. **Store What You Query For** - The way you store data should reflect how you use it in your application.

Why?

- Less data transformation between the client and the database;
- Better for performance because reading single MongoDB documents requires fewer different non-squential hard drive reads.

Multiple joins? -> Redesign APIs & Schema

2. **Principle of Least cardinality** - guideline for one-to-many and many-to-many relationship

Arrays that grow without bound are always a bad choice in MongoDB

### MongoDB Indexes - Keys for getting good performance on MongoDB

Indexes are essentially a way for MongoDB to pre-compute the results of a query.

Single-key Index & Multi-key Indexes
