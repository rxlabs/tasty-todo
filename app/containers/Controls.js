import React from 'react'
import FilterControl from '../containers/FilterControl'

import { ALL, COMPLETE, INCOMPLETE } from '../constants/Filters'

const Controls = ({ className }) => (
  <div className={className}>
    <FilterControl filter={ALL} text='All' />
    <FilterControl filter={COMPLETE} text='Complete' />
    <FilterControl filter={INCOMPLETE} text='Incomplete' />
  </div>
)

export default Controls
