'use client'
import { useRouter } from 'next/navigation';
import MovieDescription from '../../../components/MovieDescription.js'

function page() {
  return (
    <div>
       <MovieDescription />
    </div>
  );
}

export default page;
