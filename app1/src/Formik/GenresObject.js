export const dropdownOptions = [
  { label: 'Select an option', value: ''},
  { label: 'Animation', value: 'Animation'},
  { label: 'Adventure', value: 'Adventure'},
  { label: 'Action', value: 'Action'},
  { label: 'Family', value: 'Family'},
  { label: 'Comedy', value: 'Comedy'},
  { label: 'Drama', value: 'Drama'},
  { label: 'Romance', value: 'Romance'},
  { label: 'Fantasy', value: 'Fantasy'},
  { label: 'Science Fiction', value: 'Science Fiction'}
];

export function selectedValues (options, values) {
  if (Array.isArray(values)) {
    let selectedVals = []
    values.map((item) => {
      let finding = options ? options.find(option => option.value === item) : false
      finding ? selectedVals.push(finding) : false
    })
    return selectedVals
  }
  else {
    return options ? options.find(option => options.value == value) : ''
  }
}
