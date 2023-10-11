import './index.css';
import Link from 'next/link';
import data from './pagevideo/video.json';

export default function Home() {
  return (
    <main className="">
      <div className='header'>
        <header>
          <h1>WebVid</h1>
        </header>
        <div className='size line'>
          {data.map((item, index) => (
            <Link
              key={index}
              href={`/pagevideo?nom=${Object.keys(item)[0]}`}
              as={`/pagevideo?nom=${Object.keys(item)[0]}`}>
              <video src={`./${Object.keys(item)[0]}.mp4`} />
              <h2>{Object.keys(item)[0]}</h2>
            </Link>
            
          ))}
        </div>
      </div>
    </main>
  );
}
