export const type = 'findSugestions';

const findSugestions = text => {

    return {
        type,
        payload: text,
        
    };
};

export default findSugestions;

