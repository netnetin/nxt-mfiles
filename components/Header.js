import { useRouter } from 'next/router'
import { 
    Navbar, Container, Nav,
} from 'react-bootstrap';

function Header() {
    const router = useRouter();
    
    function redirectTo(link){
        router.push(link);
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={ () => redirectTo('/') }>MFiles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'></Nav>
                        <Nav>
                            <Nav.Link onClick={ () => redirectTo('/') }>Home</Nav.Link>
                            <Nav.Link onClick={ () => redirectTo('/about') }>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
  }
  
  export default Header;