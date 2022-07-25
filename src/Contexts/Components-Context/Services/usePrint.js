import { useContext } from 'react'
import { useReactToPrint } from 'react-to-print';
import { PrintContext } from '../Context/context';

export default function usePrint() {
    const { componentsPdfRef} = useContext(PrintContext);
        
    const handlePrint = useReactToPrint({
      content: () => componentsPdfRef.current,
      documentTitle: "Print",
    });
  return {handlePrint, componentsPdfRef}
}
