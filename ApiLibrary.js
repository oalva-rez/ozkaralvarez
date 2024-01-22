const HOST = "https://custom-cms.onrender.com";
// const HOST = "http://localhost:3005";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllData = async () => {
    const response = await fetch(`${HOST}/api/users/all`, {
        headers: {
            "x-api-key": API_KEY,
        },
    });
    const data = await response.json();
    return data;
};

export const getProjects = async () => {
    const response = await fetch(`${HOST}/api/users/projects`, {
        headers: {
            "x-api-key": API_KEY,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
};

export const getBlogs = async () => {
    const response = await fetch(`${HOST}/api/users/blogs`, {
        headers: {
            "x-api-key": API_KEY,
        },
    });
    const data = await response.json();
    return data;
};

export const getBlogBySlug = async (slug) => {
    const response = await fetch(`${HOST}/api/users/blogs/${slug}`, {
        headers: {
            "x-api-key": API_KEY,
        },
    });
    const data = await response.json();
    return data;
};
