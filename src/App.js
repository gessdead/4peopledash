import styled from 'styled-components';
import './App.scss';

import Header from "./components/header/Header"
import Button from "./components/button/Button";
import Select from "./components/select/Select";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Button/>
                <Select/>
            </main>
        </div>
    );
}

export default App;
