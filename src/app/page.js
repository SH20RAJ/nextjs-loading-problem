'use client'
import { Suspense, useState } from 'react'
import PostFeed from './Components'
 
export default function Posts() {
  // [loading,setLoading] = useState(true)
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
    </section>

  )
}


// Used Suspense
// Used loading state from useState()
// Used Loading.js

// Still the problem isn't solved yet


// have to do it in client side because server side is working