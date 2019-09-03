export const loadState = () =>{
    try{
        const jsonState = localStorage.getItem('state');
        if(jsonState===null){
            return undefined;
        }
        return JSON.parse(jsonState);
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state)=>{
    try {
        localStorage.setItem('state', JSON.stringify(state));
       
    } catch (err) {
        console.error(err);
        
    }
}