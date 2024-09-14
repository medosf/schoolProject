const { CosmosClient }  = require('@azure/cosmos');
require('dotenv').config();

// Create a new CosmosClient instance
const client = new CosmosClient({endpoint: process.env.ENDPOINT, key: process.env.KEY});

// Database and Container IDs
const databaseId = process.env.DB_ID;
const containerId = process.env.CONTAINER_ID;


// Insert data into Cosmos DB
 async function createItem(item) {
    const { container } = client.database(databaseId).container(containerId);
    const { resource: createdItem } = await container.items.create(item);
    console.log(`Item created: ${createdItem}`);
}

// Read data from Cosmos DB
 async function readItem(itemId) {
    const { container } = client.database(databaseId).container(containerId);
    const { resource: item } = await container.item(itemId).read();
    console.log(`Item read: ${JSON.stringify(item)}`);
}

// Read all data from Cosmos DB
 async function readAllItems() {
    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);
        const { resources: items } = await container.items.readAll().fetchAll();
        const filteredItems = items.map(item => ({
            id: item.id,
            name: item.Name,
            isComplete: item.IsComplete
        }));


        return filteredItems;
    } catch (error) {
        console.error('Error reading items from Cosmos DB:', error);
        throw error;
    }
}

// Update data in Cosmos DB
 async function updateItem(itemId, updatedData) {
    const { container } = client.database(databaseId).container(containerId);
    const { resource: item } = await container.item(itemId).replace(updatedData);
    console.log(`Item updated: ${item.id}`);
}

// Delete data from Cosmos DB
 async function deleteItem(itemId) {
    const { container } = client.database(databaseId).container(containerId);
    await container.item(itemId).delete();
    console.log(`Item deleted: ${itemId}`);
}

module.exports = {
    createItem,
    readItem,
    readAllItems,
    updateItem,
    deleteItem,
}
