export type TError = {
  data: {
    error: {
      status: number
      title: string
    }
  }
}

export type TResponse<T> = T | TError
