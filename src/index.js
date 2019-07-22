import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" date="Today at 6:00PM" text="A nice blog!" />
            <CommentDetail author="John" date="Monday at 5:22PM" text="Can be more precise." />
            <CommentDetail author="Peter" date="Friday at 11:55PM" text="Some people like it." />
            <CommentDetail author="Mary" date="Sunday at 3:19PM" text="Dunno" />
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));