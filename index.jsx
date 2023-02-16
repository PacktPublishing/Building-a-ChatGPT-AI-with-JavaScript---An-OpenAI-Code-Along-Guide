import Head from 'next/head';
import {useState} from 'react';

export default function Home() {

  const [count, setCounter] = useState(0);
  
  return (
    <>
    <div>      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <img src='/favicon.ico' />
       <h3>Name My Pet</h3>
       <p>You've used this app {count} times</p>
       <form>
          <input
          type='text'
          name='animal'
          placeholder='Enter an animal'
          />
          <input
          type="submit" onClick={(e)=> {
            e.preventDefault()
            if(count == 10) {
              return console.log('you have reached your limit')
            }
            setCounter(count + 1)}}
          />
       </form>
      </main>
      </div>
    </>
  )
}
