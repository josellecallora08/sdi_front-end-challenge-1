import { useEffect, useState } from 'react'
import image from '/images/tmsph-ls-midafood.jpeg'
import share from '/images/share-2-svgrepo-com.svg'
function App() {


  const [data, setData] = useState()
  const [news, setNews] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://tmsph-sdi-challenges.pages.dev/challenges/authors.json`, {
        method: "GET"
      })

      if (!response.ok) {
        const json = await response.json()

        console.log(json)
        throw new Error("Unable to fetch data")
      }

      const json = await response.json()
      setData(json[0])
      console.log(json[0])
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://tmsph-sdi-challenges.pages.dev/challenges/news.json`, {
        method: "GET"
      })
      if (!response.ok) {
        const json = await response.json()

        console.log(json)
        throw new Error("Unable to fetch data")
      }

      const json = await response.json()
      setNews(json[0])
      console.log(json[0])
    }

    fetchData()
  }, [])
  return (
    <>
      <div className="size-full flex items-center mt-10 overflow-hidden">
        <div className='w-4/5 h-4/5 m-auto'>
          <div>
            <figure className='w-full h-96 max-h-[75%]'>
              <img src={image} className='size-full object-cover' alt="" />
            </figure>
            <div className='flex justify-end'>
              <button className='font-semibold uppercase text-xs p-2 border mt-2 flex items-center'>
                <figure className='max-w-5 max-h-5'>
                  <img src={share} alt="" />
                </figure>
                <span>Share</span>
              </button>
            </div>
          </div>
          <p className='text-red-500 font-semibold text-sm'>{data?.name}</p>
          <p className='font-black text-black/80 text-3xl'>{news?.title}</p>
          <p className='my-5 font-semibold'>{news?.body}</p>
          <button className='relative w-fit uppercase font-black text-xs mb-10'>read article <span className='absolute -bottom-1 bg-black  left-0 w-full h-[4px]'></span></button>

          <div className='flex gap-1 items-center'>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>{`<`}</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>1</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>2</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>...</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>8</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>8</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>10</div>
            <div className='w-10 h-10 flex justify-center items-center border bg-red-600 text-white border-black/50'>11</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>12</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>13</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>14</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>...</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>56</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>57</div>
            <div className='w-10 h-10 flex justify-center items-center border border-black/50'>{`>`}</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
