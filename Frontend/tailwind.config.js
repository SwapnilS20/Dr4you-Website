/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Blue-50':'#EFF9FF',
        'Primary-Blue-100':'#DEF1FF',
        'Primary-Blue-200':'#B6E6FF',
        'Primary-Blue-300':'#75D4FF',
        'Primary-Blue-400':'#2CBEFF', 
        'Primary-Blue-500':'#00A4F4',
        'Primary-Blue-600':'#0084D4',
        'Primary-Blue-700':'#0069AB',
        'Primary-Blue-800':'#00598D',
        'Primary-Blue-900':'#064A74',
        'Primary-Blue-950':'#042F4D',
        'Neutral-50':'#F6F6F6',
        'Neutral-100':'#E7E7E7',
        'Neutral-200':'#D1D1D1',
        'Neutral-300':'#B0B0B0',
        'Neutral-400':'#888888',
        'Neutral-500':'#6D6D6D',
        'Neutral-600':'#5D5D5D',
        'Neutral-700':'#4F4F4F',
        'Neutral-800':'#454545',
        'Neutral-900':'#3D3D3D',
        'Neutral-950':'#000000',
      },
      backgroundImage: {
        'custom-gradient': 'var(--my-gradient)', // this makes it usable like `bg-custom-gradient`
        'btn-gradient': 'var( --btn-gradient)',
        'bg-gradient': 'var( --bg-gradient)',
        'text-gradient': 'var( --text-gradient)',
        'border-gradient': 'var( --border-gradient)',
        'ImgBack-gradient': 'var( --ImgBack-gradient)',
        'story-bg-gradient': 'var( --story-bg-gradient)',

    },
    fontFamily: {
      'general-sans': ['"General Sans"', 'sans-serif'],
      'manrope': ['"Manrope"', 'sans-serif'],
    },
  },
  plugins: [],
}
}