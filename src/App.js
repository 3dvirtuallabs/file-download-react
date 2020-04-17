import React, {useState} from 'react';
import './App.css';

function App() {
    let input1 = "";
    let input2 = "";
    const [customHTML,setCustomHTML] = useState(null);
    const download = event => {
        fetch("/download.html").then(content => {
            content.text().then(html => {
                html = html.replace('\'value1\'', input1).replace('\'value2\'', input2);
                setCustomHTML(html);
            })
        }).catch(error => {

        })
    }
    return (
        <div>
            <input type='text' onChange={event => {
                input1 = event.target.value;
            }}/>
            <input type='text' onChange={event => {
                input2 = event.target.value;
            }}/>

            {customHTML?<a href={'data:text/html,'+customHTML} download='mycustomhtml.html'>Download</a>:<input type='button' value="Generate" onClick={download}/>}
        </div>
    );
}

export default App;
