import { useState } from 'react'
import { tagsDB, mustHaveTags } from './jycTagsDB'
export default function Home() {
  const [checked, setChecked] = useState([])
  const [checkedEN, setCheckedEN] = useState([])
  // Add/Remove checked item from list
  const handleCheck = (e) => {
    let updatedList = [...checked]
    let tagsListEN = [...checkedEN]
    if (e.target.checked) {
      updatedList = [...checked, e.target.getAttribute('data-tags-zh')]
      tagsListEN = [...checkedEN, e.target.getAttribute('data-tags-en')]
    } else {
      updatedList.splice(checked.indexOf(e.target.getAttribute('data-tags-zh')), 1)
      tagsListEN.splice(checkedEN.indexOf(e.target.getAttribute('data-tags-en')), 1)
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
      <div className='wrapper flex flex-col align-middle justify-center mx-auto py-16'>
        <h1 className='text-2xl font-bold text-center mb-8 text-red-600'>JYC Tags Generator</h1>
        <TagsList onChange={handleCheck} data-tags={mustHaveTags} title='必选' />
        <TagsList onChange={handleCheck} data-tags={tagsDB} title='商业装修相关' />
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
        <CopyContentButton content={checkedItems} btn-text='Copy 中文tags' />
        <div className='mt-10'>{`tags: ${checkedItemsEN}`}</div>
        <CopyContentButton content={checkedItemsEN} btn-text='Copy 英文tags' />
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
          <label>
            <input
              data-tags-zh={item.zh}
              data-tags-en={item.en}
              type='checkbox'
              onChange={props.onChange}
            />
            <span>
              {item.zh} / {item.en}
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}
