import { atom } from 'recoil'

export const emailAtom = atom({
    key: "emailAtom",
    default:""
})

export const nameAtom = atom({
    key: "nameAtom",
    default:""
})

// export default {emailAtom, nameAtom}