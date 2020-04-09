export const type = 'finResults';

const finResults = text => {

    return {
        type,
        payload: text,
        
    };
};


export default finResults;

