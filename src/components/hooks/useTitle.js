import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `${title} - Food Good`;
    }, [title])
}
export default useTitle;