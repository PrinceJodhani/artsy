import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
import {useEffect, useState } from 'react';

import SearchResults from './SearchResults';
import {Navbar, Container} from 'react-bootstrap';
import Search from './Search';
import {search} from './api';
function App() {
  
  const [query,setQuery] = useState("");
  const [results, setResults] = useState(null);


useEffect(()=>{
if(!(query || query.length)){
  setResults(null);
  return;
}

if(query.length < 3){
  return;
}

search(query).then((results)=>{
  if(results && results.data){
    setResults(results.data);

    console.log('running')
  }
}).catch((err)=>{console.log('errorr')})

},[query]);



  return (
    <>
    <div className="App">
     <header>
      <Navbar bg='dark' variant='dark'>
      <Navbar.Brand className='brand' href='/'>Ecnirp</Navbar.Brand>

      </Navbar>
      <Container fluid className="painting-background">
      <Container>
          <h1 className='hero-txt'>Find art You love</h1>
      </Container>
      <Search query={query} onChange={(e)=>{setQuery(e.target.value)}}/>
      </Container>
     </header>
    </div>

    <main>
      <Container fluid>
        <SearchResults results={results} />
      </Container>
    </main>
    </>

  );
}

export default App;
