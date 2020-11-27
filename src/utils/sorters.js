export const sortMoviesAndSeries = (list, searchObject) => {
    const {
        searchName,
        orderBy,
        sortGenres
    } = searchObject;
    let returnedList = list;

    if (searchName) {
        returnedList = sortMoviesAndSeriesByName(returnedList, searchName);
    }

    if (orderBy) {
        returnedList = sortMoviesAndSeriesOrderBy(returnedList, orderBy);
    }

    if (sortGenres && sortGenres.length > 0) {
        returnedList = sortMoviesAndSeriesByGenres(returnedList, sortGenres);
    }

    return returnedList;
}

const sortMoviesAndSeriesByGenres = (list, sortGenres) => {
    let returnedList = [];

    /*
    sortGenres.forEach(sortGenre => {
        list.forEach(item => {
            if (item.genres.includes(sortGenre)) {
                if (!returnedList.includes(item)) {
                    returnedList.push(item);
                }
            }
        })
    })
    */

    list.forEach(item => {
        if (item.genres.sort().join("").includes(sortGenres.sort().join(""))) {
            if (!returnedList.includes(item)) {
                returnedList.push(item);
            }
        }
    })

    return returnedList;
}

const sortMoviesAndSeriesByName = (list, searchName) => {
    return list.filter(item => {
        return item.name.toLowerCase().includes(searchName.toLowerCase());
    })
}

const sortMoviesAndSeriesOrderBy = (list, orderBy) => {
    let returnedList = list;

    switch (orderBy) {
        case "AtoZ":
            returnedList = list.sort((a, b) => a.name.localeCompare(b.name))
            break;
        case "ZtoA":
            returnedList = list.sort((a, b) => b.name.localeCompare(a.name))
            break;
        case "ratingUp":
            returnedList = list.sort((a, b) => a.rating - b.rating)
            break;
        case "ratingDown":
            returnedList = list.sort((a, b) => b.rating - a.rating)
            break;
        default:
            break;
    }

    return returnedList;
}