import { atom, selector } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: null,
})

export const userAttributesState = atom({
  key: 'userAttributesState',
  default: {},
})

export const signInState = selector({
  key: 'signInState',
  get: ({ get }) => {
    return get(userState) !== null
  },
})

export const adminState = atom({
  key: 'adminState',
  default: false,
})
