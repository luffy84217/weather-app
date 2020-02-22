export function $(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelector(selector);
}

export function $$(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelectorAll(selector);
}

export function query(namespace, data) {
    if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }

    const store = localStorage.getItem(namespace);
    return JSON.parse(store);
}