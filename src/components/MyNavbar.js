import { VscSearch } from 'react-icons/vsc';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='https://coincap.io/static/logos/black.svg' 
              alt="logo"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://coincap.io/">Coins</Nav.Link>
            <Nav.Link href="https://coincap.io/exchanges">Exchanges</Nav.Link>
            <Nav.Link  href="https://coincap.io/swap">Swaps</Nav.Link>
          </Nav>
          <VscSearch />
       
        </Container>
    </Navbar>
    // <nav>
    //     <div className='navbar'>
    //     <div className='links'>
    //         <a href="https://coincap.io/">Coins</a>
    //         <a href="https://coincap.io/exchanges">Exchanges</a>
    //         <a href="https://coincap.io/swap">Swaps</a>
    //     </div>
    //     <img src='https://coincap.io/static/logos/black.svg' alt='logo' style={{width: "80px", height: "80px"}}/>
    //     <VscSearch />
    //     </div>
    // </nav>
  )
}

export default MyNavbar