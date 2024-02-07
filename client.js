const { Kafka } = require('kafkajs');

// broker
exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.29.225:9092'],
});