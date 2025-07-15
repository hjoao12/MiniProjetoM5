import resources from '../database/database.js';  // ← Corrigido para import default
import { Book } from '../models/models.js';

let books = [];

export const getBooks = async (req, res) => {
    try {
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros" });
    }
};

export const createBook = async (req, res) => {
    try {
        const { id, title, author } = req.body;
        if (!id || !title || !author) {
            return res.status(400).json({ message: "Dados incompletos" });
        }
        const newBook = new Book(id, title, author);
        books.push(newBook);
        res.status(201).json({ 
            message: `Livro ${newBook.title} criado com sucesso!`,
            book: newBook
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar livro" });
    }
};