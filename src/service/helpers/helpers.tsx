const retrivelocalStorageData = <T,>(key: string) =>{
    const pairJSON = localStorage.getItem(key) || '';
    const pair =JSON.stringify(pairJSON)
    if(!pairJSON){
        return {} as T;
    }

    return pair as T;
}

export {
    retrivelocalStorageData
}