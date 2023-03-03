export const userQuery = (userId) => {
    //sanity query
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}