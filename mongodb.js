// CRUD creater read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    /*db.collection('users').insertOne({
        name: 'Andrea',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user');
        }

        console.log(result.insertedId.toString());
    });

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!');
        }

        console.log(result);
    });

    db.collection('users').findOne(
        {
            _id: new ObjectId('61e3099b654bffc45a14036f')
        }, (error, data) => {

        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(data);
    });

    const cursor = db.collection('users').find({ age: 26 });

    cursor.toArray((error, data) => {

        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(data);
    });

    const users = cursor.count((error, data) => {
        console.log(data);
    });

    db.collection('users').updateOne({ 
        _id: new ObjectId('61e3099b654bffc45a14036e')
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    db.collection('tasks').updateMany({ 
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })*/

    db.collection('users').deleteMany({ 
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}); 