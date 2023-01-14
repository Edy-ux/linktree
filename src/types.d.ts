export interface Data {
    name?: string
    avatar?: string
    links?: Link[]
    socials?: Social[]
  }
  
  export interface Link {
    title: string
    href: string
    image?: string
  }
  
  export interface Social {
    title: string
    href: string
  }
  