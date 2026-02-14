const Legality = () => {
  return (
    <section className="bg-primary/5 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Terakreditasi & Diakui Negara</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-500">
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-building-columns text-4xl text-slate-600 mb-2"></i>
                    <span className="text-xs font-bold text-slate-500">KEMENDIKBUD</span>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-mosque text-4xl text-slate-600 mb-2"></i>
                    <span className="text-xs font-bold text-slate-500">KEMENAG</span>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-robot text-4xl text-slate-600 mb-2"></i>
                    <span className="text-xs font-bold text-slate-500">ASSOCIATION OF AI</span>
                </div>
            </div>
            <p className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto">
                Villa Quran Baron menyelenggarakan pendidikan kesetaraan (PKBM) yang ijazahnya diakui secara sah oleh negara untuk melanjutkan ke jenjang perguruan tinggi negeri maupun swasta.
            </p>
        </div>
    </section>
  );
};

export default Legality;