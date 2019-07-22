import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" date="Today at 6:00PM" text="A nice blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="John" date="Monday at 5:22PM" text="Can be more precise."  avatar={faker.image.avatar()} />
            <CommentDetail author="Peter" date="Friday at 11:55PM" text="Some people like it."  avatar={faker.image.avatar()} />
            <CommentDetail author="Mary" date="Sunday at 3:19PM" text="Dunno"  avatar={faker.image.avatar()} />
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));