import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Quote.module.css';

const Quote = () => {
    const quote = useSelector(state => state.quote);
    const dispatch = useDispatch();
    dispatch({ type: 'MAKE_ACTION' });
    return (
        <>
            <q>{quote} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ea. Optio sint cumque enim non perferendis ad saepe facilis amet temporibus repellat esse ex eum eos at beatae reiciendis totam, magnam rerum! Reiciendis optio modi obcaecati illo ipsa! Vitae officiis voluptate, amet libero explicabo ipsum aliquam quo! Debitis tempore accusantium similique dicta inventore fugit sequi itaque, explicabo dolorum neque excepturi vitae saepe omnis, quod cum earum! Cupiditate alias eius eum veritatis officia facere repellat, blanditiis magni provident sunt ea doloribus voluptas adipisci deleniti, quam molestias! Exercitationem voluptatum obcaecati, tenetur modi veniam dolorem, dolores reprehenderit quis, maxime esse illo commodi rem.</q>
        </>
    );
};

export default Quote;