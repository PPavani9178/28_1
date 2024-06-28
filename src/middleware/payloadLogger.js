const payloadLogger = (store) => (next) => (action) => {
    if (action.payload) {
      console.log('Payload:', action.payload);
    }
    return next(action);
  };
  
  export default payloadLogger;