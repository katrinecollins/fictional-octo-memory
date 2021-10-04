let db;

const request = indexedDB.open('fictional-octo-memory', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore()
}