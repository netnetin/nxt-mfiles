import { useState } from 'react';
import { useRouter } from 'next/router'

import {
  Container, Button,
} from 'react-bootstrap'

export default function AllFIle() {
  const router = useRouter();
  const [allfiles, setAllfiles] = useState([]);

  return (
    <div>
      <Container 
        className='py-4 text-center'
      >
        <Button 
          variant='info my-3' 
          onClick={ () => router.push('/new-file') }
        >
          New File
        </Button>
        <h4 
          className='text-center'
        >
          All Files
        </h4>
        <div 
          className='text-center py-3'
        >
          {
            allfiles.length === 0 && 
            <div className='text-center'>
              <h4>No files are saved!</h4>
            </div>
          }
        </div>  
      </Container>
    </div>
  )
}
