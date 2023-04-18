/* eslint-disable no-unused-vars */

export async function getCategories() {
    return await fetch("http://localhost:8080/api/categories/list").json();
    // return response = await fetch("http://94.233.66.6:6060/api/categories/list").json();
}

export async function getCategory(id) {
    return await fetch(`http://localhost:8080/api/categories/${id}`).json();
    // return response = await fetch(`http://94.233.66.6:6060/api/categories/${id}`).json();
}

export async function getCertificates() {
    return await fetch(`http://localhost:8080/api/certificates/list`).json();
    // return response = await fetch(`http://94.233.66.6:6060/api/certificates/list`).json();
}


