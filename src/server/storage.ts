import * as Minio from 'minio'
import { env } from '@/lib/env'

export const minioClient = new Minio.Client({
  endPoint: env.MINIO_HOST,
  port: Number.parseInt(env.MINIO_PORT),
  useSSL: false,
  accessKey: env.MINIO_ACCESS_KEY,
  secretKey: env.MINIO_SECRET_KEY,
})
