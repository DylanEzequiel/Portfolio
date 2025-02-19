import { create } from 'zustand'

const useStore = create((set)=>({
    language:"eng",
    switchLanguage:(value)=>set({language:value})
}))

export default useStore