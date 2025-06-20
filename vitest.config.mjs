import { defineConfig } from 'vitest/config'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['**/*.{js,jsx}', '*.js'],
      exclude: ['**/*.d.ts', '!__tests__/**/*.js', '*.config.js', '**/*.config.js']
    },
    projects: [
      {
        extends: './vitest.config.mjs',
        test: {
          name: 'client',
          root: 'client',
          include: ['**/*.test.js']
        }
      },
      {
        extends: './vitest.config.mjs',
        plugins: [commonjs()],
        test: {
          globals: true,
          name: 'server',
          root: 'server',
          environment: 'node',
          include: ['**/*.test.js']
        }
      }
    ]
  }
})
