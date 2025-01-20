import React from 'react';
import Count from '../count-class/Count';
import people from '../../assets/db/people.modul';

import CountProps from '../../assets/types/count/CountProps';
import CountListProps from '../../assets/types/count-list/CountListProps';


class CounterList extends React.Component<CountListProps> {
    constructor(props: CountListProps){
        super(props);

    }
    
    render(){
        return (
            <>
                <h1>{this.props.name}</h1>
                {people.map((person: CountProps) => (
                    <Count name={person.name} count={person.count}/>
                ))}
            </>
        )
    }
}

export default CounterList;