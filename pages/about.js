import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import {
    Container, Row, Col, Button,
  } from 'react-bootstrap'

export default function About() {
  const router = useRouter();

  return (
    <div>
      <Container className='py-4'>
        <h4 className='text-center'>Info about Multi File Upload</h4>
        <Row className="justify-content-center">    
            <Col sm={12} md={10} lg={8} xl={8}>
                <p className='text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book.
                </p>
            </Col>
        </Row>
        <div className='text-center py-3'>
          <Button variant='info' onClick={ () => router.push('/all-file') }>All Saved Files</Button>
        </div>  
      </Container>
    </div>
  )
}