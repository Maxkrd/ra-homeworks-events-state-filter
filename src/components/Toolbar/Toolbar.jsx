import classes from './Toolbar.module.css';

export const Toolbar = ({filters, selected, onSelectFilter}) => {
    
  return (
    <ul className={classes.container}>
        {filters.map(item => (
            <li 
                key={item}
                onClick={() => onSelectFilter(item)}
                className={item === selected ? classes.selected : classes.inactive}
            >
                {item}
            </li>
        ))}
        
    </ul>
  )
}