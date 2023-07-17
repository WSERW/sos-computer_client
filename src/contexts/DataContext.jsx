import React, { createContext, useState, useEffect } from 'react';
import { getCourses, getDemoCourses } from '../api'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [courses, setCourses] = useState(null);
    const [demo, setDemo] = useState(null);

    useEffect(() => {
        getCourses()
            .then(data => setCourses(data))
        getDemoCourses()
            .then(data => setDemo(data))
    },[])


    return (
        <DataContext.Provider value={{ demo, courses }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
