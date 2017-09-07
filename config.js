const env = process.env

export let nodeEnv = env.NODE_ENV || 'development'

export default {
  port: env.PORT || 8060,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
}