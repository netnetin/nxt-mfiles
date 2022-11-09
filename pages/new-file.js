import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import {
  Container, Form, Row, Col,
  Button, Card,
} from 'react-bootstrap'
import { useState } from 'react';

export default function NewFile() {
  const router = useRouter();
  const [ allfiles, setAllfiles ] = useState([]);

  function onSelectFiles(event){
    const files = event.target.files;
    const filesArr = Array.from(files);
    filesArr.forEach(file => {
        setAllfiles(allfiles => [...allfiles, file]);
    });
    // console.log("all files arr: ", allfiles);
    // console.log("all files arr cust count: ", allfiles.length);
  }
  function onDeleteFile(index){
    // console.log("on delete index: ", index);
    allfiles.splice(index, 1);
    setAllfiles([...allfiles]);
  }

  function handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    // console.log("final submit files count: ", allfiles.length);
  }

  return (
    <div>
      <Container className='text-center py-4'>
        <Button 
          className='my-3'
          variant='info' 
          onClick={ () => router.push('/all-file') }
        >
          Go to All Saved Files
        </Button>
        <h4 
          className='text-center'
        >
          Multi File Upload
        </h4>
        <div 
          className='text-center py-3'
        >
          <Row 
            className='justify-content-center'
          >
            <Col 
              sm={12} md={8} lg={6}
            >
              <Form 
                onSubmit={ handleSubmit }
              >
                <Form.Group 
                  controlId="files" 
                  className="mb-3"
                >
                  <Form.Label>
                    Files upload: 
                  </Form.Label>
                  <Form.Control 
                    type="file" 
                    multiple 
                    onChange={ onSelectFiles } 
                  />
                </Form.Group>
                <Button 
                  type="submit" 
                  variant='primary'
                >
                  Save All Files
                </Button>
              </Form>
              <br /><br />
            </Col>
          </Row>
        </div>
        { 
          allfiles.map((f, i) => (
            <Row 
              key={i} 
              className='justify-content-center py-3'
            >
              <Col 
                sm={10} md={6} lg={4}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>
                      { f.name }
                    </Card.Title>
                    <Card.Link 
                      onClick={ () => onDeleteFile(i) }
                    >
                      Delete file
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))
        }        
      </Container>
    </div>
  )
}
