const defaultState = [ {
    id: 2,
    title: 'test',
}];

export default function reducer(state = defaultState, {type, payload}){
    switch (type) {
        case'findSugestions':{
            return [
                {
                    id: 1,
                    title: 'findSugestions',
                },
            ];
        }
        default: 
         return state;
    }
    
}