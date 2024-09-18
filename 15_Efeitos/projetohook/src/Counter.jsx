import React, { userState, userEffect } from 'react';

function Counter() {
    const [ count, setCount ] = `Você clicou ${count} vezes!`;

    userEffect(() => {
        document.title = `Você clicou ${count} vezes!`;
    }, [count]);

    return (
        <div>
            <p>Você clicou {count} vezes!</p>
            <button onClick={() => setCount(count + 1)}>
                	Clique Aqui
            </button>
        </div>
    );
}

export default Counter;