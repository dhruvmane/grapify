// STATES:
//   INTRO: get started page
//   PROFILES: choose profiles list
//   MAIN: app with profile data
let APP: IApp = $state({
     _STATE: "INTRO",
     _AVAILABLE_PROFILES: [
          {
               id: "000",
               name: "Home Expenses",
               description: "Book Keeping"
          },
          {
               id: "001",
               name: "Business Expenses",
               description: "Book Keeping"
          },
          {
               id: "002",
               name: "College",
               description: "Book Keeping"
          },
     ]
})

interface IProfile {
     id: string,
     name: string,
     description: string,
     creationDate?: number,
     transactions?: ITransaction[]
}

interface IApp {
     _STATE: string,
     _ACTIVE_PROFILE?: IProfile,
     _AVAILABLE_PROFILES?: IProfile[]
}

interface ITransaction {
     id: string,
     name: string,
     amount: number,
     time: {
          ofOccurance: number,
          ofLogging: number
     }
}

export { type IProfile, type ITransaction }
export { APP }