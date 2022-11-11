import Link from 'next/link'

export default function Home() {
  return (
    <div className=' min-h-screen '>
      <div className='wrapper flex flex-col align-middle justify-center mx-auto py-16'>
        <h1 className='text-2xl font-bold text-center mb-8 text-red-600'>
          Mooc Marketing Tool Box
        </h1>
        <Link href='/jyc-tags-generator'>JYC Tags Generator</Link>
      </div>
    </div>
  )
}
function CopyContentButton(props) {
  return (
    <button
      className='px-6 py-2 mt-3 font-semibold text-sm bg-red-300 text-black rounded-full shadow-sm w-fit hover:bg-red-400 '
      onClick={() => {
        navigator.clipboard.writeText(props.content)
      }}
    >
      {props['btn-text']}
    </button>
  )
}
function TagsList(props) {
  return (
    <div>
      <h2 className='text-xl text-red-600 my-4'>{props.title}</h2>
      {props['data-tags'].map((item, index) => (
        <div key={index}>
          <label className='cursor-pointer'>
            <input
              data-tags-zh={item.zh}
              data-tags-en={item.en}
              type='checkbox'
              onChange={props.onChange}
            />
            <span className='pl-3'>
              {item.zh} / {item.en}
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}
