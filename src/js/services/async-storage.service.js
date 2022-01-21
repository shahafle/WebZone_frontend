import { storageService } from './storage.service.js';
import { wapService } from './wap.service.js';
import { wapTemplate_1 } from '../../templates/wap-template-1';

export const asyncStorageService = {
    query,
    get,
    post,
    put,
    remove,
}

const ENTITY_STORAGE_KEY = 'wapDB';

///////////////////////// This file is a demo server with its service combined in one /////////////////////////

// entityStorageKey is the local storage key (ENTITY_STORAGE_KEY), in wapService we pass it as if it was the url of the server in a xhr request.


// Get entities
function query(entityStorageKey, delay = 500) {
    const entities = _loadEntitiesFromStorage(entityStorageKey) || _createEntities();
    return new Promise(resolve => setTimeout(() => resolve(entities), delay));
}

// Get entity by id
async function get(entityStorageKey, entityId) {
    const entities = await query(entityStorageKey);
    const entity = entities.find(entity => entity._id === entityId);
    return entity;
}

// Delete an entity
// In the server we'll call this delete (cant use delete here because its a js keyword)
async function remove(entityStorageKey, entityId) {
    const entities = await query(entityStorageKey);
    const idx = entities.findIndex(entity => entity._id === entityId);
    entities.splice(idx, 1);
    _saveEntitiesToStorage(entityStorageKey, entities);
}

// Add a new entity
async function post(entityStorageKey, entityToAdd) {
    entityToAdd._id = wapService.getRandomId();
    // const newEntity = _createEntity(newEntity);
    const entities = await query(entityStorageKey);
    entities.push(entityToAdd);
    _saveEntitiesToStorage(entityStorageKey, entities);
    return entityToAdd;
}

// Update an existing entity
async function put(entityStorageKey, updatedEntity) {
    const entities = await query(entityStorageKey);
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
    entities.splice(idx, 1, updatedEntity);
    _saveEntitiesToStorage(entityStorageKey, entities);
    return updatedEntity;
}


// *** *** *** PRIVATE FUNCTIONS *** *** *** //


function _createEntities() {
    const entities = [];

    entities.push(wapTemplate_1);
    // entities.push(_createEntity());

    _saveEntitiesToStorage(ENTITY_STORAGE_KEY, entities);

    return entities;
}

function _createEntity() {
    return {
        "name": "new webApp",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Username"
        },
        "cmps": [],
        "isPublished": false
    }
}

function _saveEntitiesToStorage(entityStorageKey, entities) {
    storageService.saveToStorage(entityStorageKey, entities);
}

function _loadEntitiesFromStorage(entityStorageKey) {
    return storageService.loadFromStorage(entityStorageKey);
}