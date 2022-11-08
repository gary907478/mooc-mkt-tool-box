import { useState } from 'react'
export default function Home() {
  const tagsDB = [
    {
      zh: '商业装修设计',
      en: 'Commercial Renovation Design',
    },
  ]
  const mustHaveTags = [
    {
      zh: 'JYC',
      en: 'JYC',
    },
    {
      zh: '匠垣建设',
      en: 'JY Construction',
    },
    {
      zh: '匠垣设计',
      en: 'JY Construction Design',
    },
  ]
  const [checked, setChecked] = useState([])
  const [checkedEN, setCheckedEN] = useState([])

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked]
    let tagsListEN = [...checkedEN]
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
      tagsListEN = [...checkedEN, event.target.getAttribute('data-tags-en')]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
      tagsListEN.splice(checkedEN.indexOf(event.target.getAttribute('data-tags-en')), 1)
    }
    setChecked(updatedList)
    setCheckedEN(tagsListEN)
  }
  // Generate string of checked items
  var checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item
      })
    : ''
  var checkedItemsEN = checkedEN.length
    ? checkedEN.reduce((total, item) => {
        return total + ', ' + item
      })
    : ''
  return (
    <div className=' min-h-screen '>
      <div className='container flex flex-col align-middle justify-center mx-auto py-16'>
        <h1 className='text-2xl font-bold text-center mb-8 text-red-600'>JYC Tags Generator</h1>
        <h2 className='text-xl text-red-600 my-4'>必选</h2>
        {mustHaveTags.map((item, index) => (
          <div key={index}>
            <input value={item.zh} data-tags-en={item.en} type='checkbox' onChange={handleCheck} />
            <span>
              {item.zh} / {item.en}
            </span>
          </div>
        ))}
        <h2 className='text-xl text-red-600 my-4'>商业装修相关</h2>

        {tagsDB.map((item, index) => (
          <div key={index}>
            <label>
              <input
                value={item.zh}
                data-tags-en={item.en}
                type='checkbox'
                onChange={handleCheck}
              />
              <span>
                {item.zh} / {item.en}
              </span>
            </label>
          </div>
        ))}
        <button
          className='px-6 py-2 mt-3 font-semibold text-sm bg-red-300 text-black rounded-full shadow-sm w-fit hover:bg-red-400 '
          onClick={() => {
            setChecked([])
            setCheckedEN([])
            document.querySelectorAll('input[type=checkbox]').forEach((el) => (el.checked = false))
          }}
        >
          Reset
        </button>
        <div className='mt-10'>{`tags: ${checkedItems}`}</div>

        <button
          className='px-6 py-2 mt-3 font-semibold text-sm bg-red-300 text-black rounded-full shadow-sm w-fit hover:bg-red-400 '
          onClick={() => {
            navigator.clipboard.writeText(checkedItems)
          }}
        >
          Copy 中文tags
        </button>
        <div className='mt-10'>{`tags: ${checkedItemsEN}`}</div>
        <button
          className='px-6 py-2 mt-3 font-semibold text-sm bg-red-300 text-black rounded-full shadow-sm w-fit hover:bg-red-400 '
          onClick={() => {
            navigator.clipboard.writeText(checkedItemsEN)
          }}
        >
          Copy 英文tags
        </button>
      </div>
    </div>
  )
}
