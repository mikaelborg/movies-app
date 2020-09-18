export const search = (value) => {
    return {
        type: 'SEARCH',
        value
    };
};

export const filter = (filter) => {
    return {
        type: 'FILTER',
        filter
    };
};