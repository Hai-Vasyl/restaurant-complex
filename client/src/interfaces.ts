export interface IImage {
  description: string
  title: string
  path: string
  hrComplex: string
  _id: string
}

export interface IHRComplexInfo {
  title: string
  location: string
  description: string
  food: string
  servicesIncluded: string
  entertainment: string
  services: string
  contacts: string
  road: string
}

export interface IDateRange {
  _id: string
  settlement: string
  eviction: string
  hrComplex: string
  booked: string
  price: string
  chosen?: boolean
}

export interface IOrder {
  buyer: string
  hrComplex: string
  price: string
  settlement: string
  eviction: string
  date: string
}

export interface IResponseBase {
  _id: string
  hrComplex: string
  owner: {
    _id: string
    ava: string
    role: string
    username: string
  }
  content: string
  date: string
  response?: string
}

export interface IResponse extends IResponseBase {
  answers: IResponseBase[]
}
