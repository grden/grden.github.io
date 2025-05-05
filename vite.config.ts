import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    mdx({
      // Tell MDX to only include content after frontmatter
      remarkPlugins: [
        // This configures remark to properly extract frontmatter
        [remarkFrontmatter, {type: 'yaml', marker: '-'}],
        // This ensures frontmatter is properly handled and not rendered
        remarkMdxFrontmatter
      ]
    })
  ],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
  }
})
