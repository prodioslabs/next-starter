import { env } from '@/lib/env'
import * as Minio from 'minio'

export const minioClient = new Minio.Client({
  endPoint: env.MINIO_HOST,
  port: Number.parseInt(env.MINIO_PORT),
  useSSL: false,
  accessKey: env.MINIO_ACCESS_KEY,
  secretKey: env.MINIO_SECRET_KEY,
})
