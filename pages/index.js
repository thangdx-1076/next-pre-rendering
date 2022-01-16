import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <br></br>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <br></br>
      <Link href='/products'>
        <a>products</a>
      </Link>
      <br></br>
      <Link href='/news'>
        <a>news</a>
      </Link>
    </>
  )
}

export default Home
