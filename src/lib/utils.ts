import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { AxiosError } from 'axios'
import { TRPCClientError } from '@trpc/client'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }
  if (process.env.VERCEL_URL) {
    // SSR should use vercel url
    return `https://${process.env.VERCEL_URL}`
  }
  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export function getUrl(path: string) {
  return `${getBaseUrl()}${path}`
}

export function getErrorMessage(
  error: unknown,
  defaultMessage: string = 'Something went wrong. Please try again.',
) {
  let message = defaultMessage

  if (error instanceof AxiosError) {
    message = error.response?.data?.message
  } else if (error instanceof TRPCClientError) {
    message = error.message
  } else if (error instanceof Error) {
    message = error.message
  }

  return message
}
