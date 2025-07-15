import { getResources, createResource } from '../services/antiracism-service.js';

export const listResources = async (req, res) => {
    try {
        const resources = await getResources();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addResource = async (req, res) => {
    try {
        const newResource = await createResource(req.body);
        res.status(201).json(newResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};