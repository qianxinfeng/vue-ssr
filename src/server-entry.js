import {app,store} from './app'

export default context=>{
    context.initialState=store.state;
    return app;
}