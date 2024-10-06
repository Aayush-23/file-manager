# React + TypeScript + Vite

For now I have used the file structure as given in the assignment, But ideally we can use the format like this -

``{
  1: {
    id: 1,
    name: "File Explorer",
    type: "folder",
    parentId: null,
    children: [2, 3],
  },
  2: {
    id: 2,
    name: "node_modules",
    type: "folder",
    parentId: 1,
    children: [],
  },
  3: {
    id: 3,
    name: "public",
    type: "folder",
    parentId: 1,
    children: [5],
  },
  5: {
    id: 5,
    name: "index.html",
    type: "file",
    parentId: 3,
    children: [],
  },
};``

Using this format we can easily read the file and traverse without going in nestet format. And add, delete and rename will also be much easier.
