import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import {
  Container, Button,
} from 'react-bootstrap'

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Container className='py-4'>
        <h4 className='text-center'>Multi File Upload</h4>
        <div className='text-center py-3'>
          <Button variant='info' onClick={ () => router.push('/all-file') }>All Uploaded Files</Button>
          <br />
          <br />
          <Button variant='secondary' onClick={ () => router.push('/new-file') }>New Files</Button>
        </div>  
      </Container>
    </div>
  )
}
