import React from 'react'
import FilterLink from '../../containers/FilterLink/FilterLink'
import { VisibilityFilters } from '../../actions'
import classes from './Footer.module.css'

const Footer = () => (
  <div className={classes.Footer}>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink type="Danger" filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink type="Success" filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer