import useSWR from 'swr'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await fetch(url, {
      method: 'get',
    })
    const data = await response.json()

    return data
  })

  return { data, error }
}
