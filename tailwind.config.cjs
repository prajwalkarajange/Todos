module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        accent: '#06b6d4'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  safelist: [
    'max-w-2xl','mx-auto','mt-12','bg-white','shadow-lg','rounded-lg','p-6',
    'w-full','p-3','border','border-slate-200','rounded-md','focus:outline-none','focus:ring-2','focus:ring-primary',
    'line-through','text-slate-400','bg-primary','text-white','px-4','py-2','hover:bg-indigo-600',
    'bg-red-500','hover:bg-red-600','space-y-3','text-slate-500','bg-slate-50','border-slate-100',
    'text-2xl','font-semibold','text-sm','flex','items-center','justify-between','gap-3','p-3','bg-white'
  ],
  plugins: []
}
