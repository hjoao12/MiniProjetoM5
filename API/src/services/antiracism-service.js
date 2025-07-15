import { antiRacismResources } from '../database/antiracism-db.js';
import { AntiRacismResource } from '../models/antiracism-model.js';

export const getResources = async () => {
    return resources;
};

export const createResource = async (resourceData) => {
    const newResource = new AntiRacismResource(
        resourceData.id,
        resourceData.title,
        resourceData.description,
        resourceData.type
    );
    resources.push(newResource);
    return newResource;
};