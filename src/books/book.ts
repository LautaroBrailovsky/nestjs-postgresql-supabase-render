// Así llega un libro desde PostgreSQL (una fila de la tabla)
export interface BookRow {
  id: number;
  title: string;
  author: string;
  pages: number;
  created_at: Date; // en SQL se escribe con guion bajo
  stock: number;
}

// Así lo devuelve nuestra API
export interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  createdAt: Date; // en JavaScript, en camelCase
  stock: number;
}

// Una página de libros (lo que devuelve la v2 de GET /books)
export interface BookPage {
  data: Book[]; // los libros de esta página
  total: number; // cuántos libros hay en total (con el filtro)
  page: number; // página actual
  limit: number; // libros por página
  totalPages: number; // cuántas páginas hay
}

// Convierte una fila de la base de datos en un libro de la API
export function toBook(row: BookRow): Book {
  return {
    id: row.id,
    title: row.title,
    author: row.author,
    pages: row.pages,
    createdAt: row.created_at,
    stock: row.stock,
  };
}
