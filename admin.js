const {kafka} = require('./client');

async function inti(){
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Admin Connecting Success...");

    console.log("Creating topic");
    await admin.createTopics({
        topics: [{
            topic: 'rider-status',
            numPartitions: 2
        }]
    });
    console.log("Creating topic Success");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}
inti(); // setting up infara of Kafka