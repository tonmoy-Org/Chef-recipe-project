import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `${title} - Good Food`;
    }, [title])
}
export default useTitle;