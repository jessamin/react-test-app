import { useEffect } from 'react'
import {setCurrentModuleAction} from "../../redux/actions";

export default function useClassAndModuleSet(module, path = null, dispatch = null) {
  const bodyClassName = 'page-' + module

  useEffect(() => {
    document.body.classList = [bodyClassName]
    if(dispatch !== null) {
      dispatch(setCurrentModuleAction(module, path))
    }
  }, [])
}