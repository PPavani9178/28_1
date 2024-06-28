const actionTypeLogger = (store) => (next) => (action) => {
    console.log('Dispatching action type:', action.type);
    return next(action);
  };
  
  export default actionTypeLogger;