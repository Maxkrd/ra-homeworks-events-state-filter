import { Component } from 'react'
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';
import classes from './Portfolio.module.css';

export class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            selected: 'All',
        }
    }
    onSelectFilter = event  => {
        this.setState({selected: event})
    }
    render() {
        const { data } = this.props;
        return (
            <div className={classes.container} >
            <Toolbar 
                filters={data.filters} 
                onSelectFilter={this.onSelectFilter} 
                selected={this.state.selected}
            />
            <ProjectList selected={this.state.selected}/>
            </div>
        )
    }
}