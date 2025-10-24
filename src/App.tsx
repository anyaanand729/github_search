import {useEffect, useState} from 'react'
import './App.css'

export default function App() {
    const [users, setUser] = useState<{login:string, avatar_url:string}[]>([]);
    const [result, search] = useState<string>("126");
    useEffect(() => {
        fetch("https://api.github.com/search/users?q="+ result+"+in:login")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.items)
                    console.log(data);
            })
            .catch((error) => console.log(error));
    }, [result]);

    return (
        <>
            <div id="topStuff">
            <label style={{fontSize:'20px'}}>
                <input id="myInput" placeholder="Type here to search"/>
            </label>

            <button id='buttonOne' onClick={() => {
                const newVal = (document.getElementById('myInput') as HTMLInputElement ).value;
                search(newVal);
            }}>Search</button>
            </div>

            <div style={{paddingLeft:'10px', fontSize:'20px'}}>
            {users.map((user, index) =>
                <div key={index} className="something">
                    {<img style={{width:"125px"}}
                        src={user.avatar_url}
                        alt="Alan L. Hart"
                    />}
                    <span className='login'>{user.login}</span>

                </div>)}
            </div>
        </>
    )
}
