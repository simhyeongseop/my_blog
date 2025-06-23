// 요행 스타일 + Glassmorphism 기반 Tailwind 스타일 (전역 변수 버전)

// 🧭 Menu
const menuListStyle = `md:ml-10 text-base font-semibold text-emerald-900 hover:text-emerald-600 transition duration-200 backdrop-blur-sm bg-white/40 px-4 py-2 rounded-xl shadow-sm`;
const mobileMenuStyle = `block py-4 px-6 text-emerald-800 hover:bg-emerald-50 rounded-lg`;

// 📝 Post Headers
const posth1Style = `text-[40px] font-bold mb-4 mt-6 text-emerald-900 tracking-tight font-serif`;
const posth2Style = `text-[32px] font-bold mb-4 mt-6 text-emerald-800 tracking-tight`;
const posth3Style = `text-[28px] font-bold mb-4 mt-6 text-emerald-700 tracking-tight`;
const posth4Style = `text-2xl font-semibold mb-2 mt-4 text-emerald-700`;
const posth5Style = `text-xl font-semibold mb-2 mt-4 text-emerald-700`;
const posth6Style = `text-lg font-semibold mb-2 mt-4 text-emerald-700`;

// 📄 Paragraphs
const postpStyle = `text-lg my-6 leading-relaxed text-gray-700 backdrop-blur-sm bg-white/40 p-4 rounded-xl shadow-sm font-serif`;

// 🖼 Images
const postimgStyle = `rounded-2xl my-10 mx-auto block max-w-full h-auto object-cover shadow-xl border border-emerald-200`;

// 🔗 Links
const postaStyle = `text-emerald-700 underline hover:text-emerald-500 transition duration-200 font-medium`;

// 📋 Lists
const postulStyle = `list-disc list-inside text-lg font-normal tracking-wide text-gray-800`;
const postolStyle = `list-decimal list-inside text-lg font-normal tracking-wide text-gray-800`;
const postliStyle = `pl-4 mb-2 leading-relaxed tracking-wide`;

// 💬 Blockquote
const postblockquoteStyle = `border-l-4 border-emerald-400 pl-4 italic text-gray-800 bg-white/40 backdrop-blur-md p-4 rounded-xl shadow-inner`;

// 🧾 Code Blocks
const postpreStyle = `relative bg-white/20 backdrop-blur-lg p-6 rounded-xl text-base overflow-auto shadow-lg border border-gray-200`;
const postcodeStyle = `font-mono text-base text-emerald-800`;

// 🧮 Tables
const posttableStyle = `w-full table-auto border-collapse text-left shadow-md backdrop-blur bg-white/30 rounded-xl overflow-hidden`;
const posttheadStyle = `text-left`;
const postthStyle = `bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-semibold`;
const posttbodyStyle = `text-left`;
const posttdStyle = `border border-gray-300 px-4 py-2 text-sm text-gray-700`;

// 📏 Divider
const posthrStyle = `my-6 border-2 border-emerald-300 rounded-full`;

// ✨ Emphasis
const postemStyle = `italic text-emerald-700`;
const poststrongStyle = `font-bold text-emerald-900`;

// 🧑‍💻 Blog Header
const postcategoryStyle = `bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full tracking-wide`;
const posttitleStyle = `md:text-[40px] md:leading-[56px] text-[32px] leading-[40px] font-bold my-3 text-emerald-900`;

// 📅 Author Info
const postauthordateDivStyle = `md:mb-8 mb-6 flex items-center gap-3`;
const postauthorDivStyle = `inline-block`;
const postauthorImgStyle = `w-8 h-8 rounded-full object-cover border border-gray-300`;
const postauthorStyle = `text-sm font-semibold text-gray-800`;
const postdateStyle = `text-sm text-gray-500`;

// 🧱 Image Title
const postimgtitleStyle = `w-full max-h-[520px] object-cover my-4 rounded-2xl shadow-md`;
const postsectionStyle = `w-full mb-10 md:mb-[60px] max-w-full`;

// 📓 Notebook Codes
const notebookpreStyle = `relative bg-white/30 backdrop-blur p-8 rounded-xl mb-6 overflow-auto shadow`;
const notebookcodeStyle = `font-mono text-base text-emerald-800`;
const notebookcopyButtonStyle = `absolute top-5 right-5 p-2 bg-white/60 border border-gray-300 rounded-full shadow hover:bg-white`;
const notebookdownloadButtonStyle = `px-5 py-[11px] mb-4 text-sm font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600`;

// 🧾 Blog List Card (대형)
const bloglistFirstCardStyle = `lg:col-span-3 md:col-span-2 col-span-1 h-auto rounded-2xl bg-white/40 backdrop-blur-md shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer flex md:flex-row flex-col md:mb-5`;

// 📚 Pagination 스타일 누락 변수 추가
const paginationStyle = `flex justify-center items-center gap-4 mt-20 mb-32`;
const pageNumberListStyle = `flex items-center justify-center gap-1`;
