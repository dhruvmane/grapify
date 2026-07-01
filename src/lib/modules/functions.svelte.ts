import { APP, type IProfile } from "./globals.svelte"

function changeState(state: string) {
     APP._STATE = state;
}

function getProfileData(id: string) {
     let _list: any = APP._AVAILABLE_PROFILES?.find(profile => profile.id === id)
     return _list 
}

function createProfile(profile: IProfile) {
     let _profileData = profile
     APP._AVAILABLE_PROFILES?.push(_profileData)
}

export { changeState }
export { getProfileData }
export { createProfile }