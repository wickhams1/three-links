const sortLinks = (linkA, linkB) => {
    // Sort on date created
    // Sorting could be configured based on request parameters (e.g. different fields, asc/desc)
    if (linkA.dateCreated < linkB.dateCreated) {
        return -1;
    } else if (linkA.dateCreated > linkB.dateCreated) {
        return 1;
    }
    return 0;
};

export default sortLinks;