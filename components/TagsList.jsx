export default function TagsList(props) {
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
  return <div></div>
}
