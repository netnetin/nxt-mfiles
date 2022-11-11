import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function AllFile() {
  const router = useRouter();
  const [allfiles, setAllfiles] = useState([]);

  useEffect(() => { getFiles() }, [])

  async function getFiles() {
    let response = await fetch('/api/save', { method: 'GET' });
		let data = await response.json();
		console.log(data);

		if (data.success) { setAllfiles(data.files); }
		else return console.log(data.error)
  }

  return (
    <div>
      <Container className='py-4 text-center'>
        <Button variant='info my-3' onClick={ () => router.push('/new-file') }>New File</Button>
        <h4 className='text-center'>All Files</h4>
        <div className='text-center py-3'>
          {
            allfiles.length === 0 ? 
            ( 
              <div className='text-center'>
                <h4>No files are saved!</h4>
              </div>
            ) 
            : 
            ( 
              <div>
                <Row className='justify-content-center py-3'>
                  { allfiles.map((f, i) => (
                  
                    <Col key={i} sm={10} md={6} lg={4}>
                      <Card className="bg-dark text-white">
                        <Card.Body>
                          <Card.Title>{ f }</Card.Title>
                          <a href={ "/files/"+f } rel="noopener noreferrer" target="_blank">
                            see new tab
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>  
              </div> 
            )
          }

        </div>  
      </Container>
    </div>
  )
}

export default AllFile