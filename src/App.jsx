import React, {useEffect,useState} from 'react'
import Index from './pages/Index';
import './App.css';

const App = () => {
    const [data, setData] = useState('')
    const [url, setUrl] = useState('')
    useEffect(() => {
        getData()
    },[]);

    const getData = (url = "https://api.sos-computer.site/") => {
        // const url = 'http://127.0.0.1:8000/'
        // const url = 'https://api.sos-computer.site/'
        fetch(url,{
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => setData(response))
        .catch(response => console.log(response,url))

    }
    return (
        <div>
            <div>
                {data}
            </div>
            
            <input type="text" value={url} onChange={e => {setUrl(e.target.value)}}/>
            <button onClick={e => {getData(url)}}>Сделать запрос</button>
            <Index/>
        </div>

    )
}

export default App