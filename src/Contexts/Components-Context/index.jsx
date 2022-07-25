import { PrintContext } from './Context/context'
import { useRef } from 'react';

 function Print({children}) {
    
    const componentsPdfRef = useRef(null);

  return (
    <PrintContext.Provider value={{componentsPdfRef}}>
        {children}
    </PrintContext.Provider>
  )
}
export default Print;