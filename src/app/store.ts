import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi } from './services/movies'

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tmdbApi.middleware)
  }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
