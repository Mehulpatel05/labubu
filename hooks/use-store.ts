'use client'

import { useEffect, useState } from 'react'
import { store } from '@/lib/store'

export function useStore() {
  const [, forceUpdate] = useState({})

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate({})
    })
    return unsubscribe
  }, [])

  return store
}
