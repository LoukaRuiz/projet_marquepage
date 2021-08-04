import {observable,action, makeObservable} from 'mobx'
class ListStore {

    constructor(){
        makeObservable(this,{
        });
    }
}

const listStore = new ListStore();
export {listStore};