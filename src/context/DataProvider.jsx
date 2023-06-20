import React, { useState, useEffect, createContext } from 'react'
import api from "../components/api_client/api"

const dataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const [aboutdata, setAboutdata] = useState(null);
    const [workdata, setWorkdata] = useState([]);
    const [contactdata, setContactdata] = useState(null);
    const getdata = async () => {
        try {
            const response = await api.get(`/api/${21}`);
            const singleData = response.data;
            setProfileData(singleData);
        } catch (error) {
            console.log(error);
        }
    };
    const getaboutdata = async () => {
        try {
            const response = await api.get(`/api/about/${21}`);
            const singleAbData = response.data;
            setAboutdata(singleAbData);
        } catch (error) {
            console.log(error);
        }
    }

    const getworkdata = async () => {
        try {
            const response = await api.get(`/api/work/all`);
            const allworkdata = response.data;
            setWorkdata(allworkdata);
        } catch (error) {
            console.log(error);
        }
    }
    const getcontactdata = async () => {
        try {
            const response = await api.get(`/api/contact/${21}`);
            const Contactdata = response.data;
            setContactdata(Contactdata);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata();
        getaboutdata()
        getworkdata()
        getcontactdata()
    }, []);
    const user = useState({
        name: "rag"
    })
    return (
        <dataContext.Provider value={{ profileData, aboutdata, workdata, contactdata }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider
export { dataContext }