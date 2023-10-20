import { listCard } from '../../data/listCard';
import classes from './ProjectList.module.css';

export const ProjectList = ({selected}) => {

    function filt(data, activeFilter) {

        const result = data.filter(item => {
            if (activeFilter === "All") {
                return item
            }
            return item.category === activeFilter 
        })
        return result;
    }

    const list = filt(listCard, selected);
    

  return (
        <div className={classes.container}>
            {list.map((item, i) => (
                    <div key={i} className={classes.card}>
                        <img src={item.img} alt={item.category} />
                    </div>
                )
            )}
        </div>
        
  )
}
